import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import httpErrorGenerator from '../utils/httpErrorGenerator';

function validateToken(authorization: string) {
  if (!authorization) {
    throw httpErrorGenerator(401, 'Token not found');
  }
  try {
    jwt.verify(authorization, process.env.JWT_SECRET || 'secret');
  } catch {
    throw httpErrorGenerator(401, 'Invalid token');
  }
}

function validateProducts(productsIds: number[]) {
  if (!productsIds) {
    throw httpErrorGenerator(400, '"productsIds" is required');
  }
  if (!Array.isArray(productsIds)) {
    throw httpErrorGenerator(422, '"productsIds" must be an array');
  }
  if (!productsIds.length) {
    throw httpErrorGenerator(422, '"productsIds" must include only numbers');
  }
}

export default function userValidation(req: Request, _res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const { productsIds } = req.body;
  validateToken(authorization ?? '');
  validateProducts(productsIds);
  next();
}
