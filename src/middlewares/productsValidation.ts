import { NextFunction, Request, Response } from 'express';
import httpErrorGenerator from '../utils/httpErrorGenerator';

function validateField(fieldName: string, fieldValue: string) {
  if (!fieldValue) {
    throw httpErrorGenerator(400, `"${fieldName}" is required`);
  }
  if (typeof fieldValue !== 'string') {
    throw httpErrorGenerator(422, `"${fieldName}" must be a string`);
  }
  if (fieldValue.length < 3) {
    throw httpErrorGenerator(422, `"${fieldName}" length must be at least 3 characters long`);
  }
}

function validateName(name: string) {
  validateField('name', name);
}

function validateAmount(amount: string) {
  validateField('amount', amount);
}

export default function productsValidation(req: Request, _res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  validateName(name);
  validateAmount(amount);
  next();
}
