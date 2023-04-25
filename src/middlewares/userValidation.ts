import { NextFunction, Request, Response } from 'express';
import httpErrorGenerator from '../utils/httpErrorGenerator';

function validateUsername(username: string) {
  if (!username) {
    throw httpErrorGenerator(400, '"username" is required');
  }
  if (typeof username !== 'string') {
    throw httpErrorGenerator(422, '"username" must be a string');
  }
  if (username.length < 3) {
    throw httpErrorGenerator(422, '"username" length must be at least 3 characters long');
  }
}

function validateVocation(vocation: string) {
  if (!vocation) {
    throw httpErrorGenerator(400, '"vocation" is required');
  }
  if (typeof vocation !== 'string') {
    throw httpErrorGenerator(422, '"vocation" must be a string');
  }
  if (vocation.length < 3) {
    throw httpErrorGenerator(422, '"vocation" length must be at least 3 characters long');
  }
}

function validateLevel(level: number) {
  if (level === undefined) {
    throw httpErrorGenerator(400, '"level" is required');
  }
  if (typeof level !== 'number') {
    throw httpErrorGenerator(422, '"level" must be a number');
  }
  if (level < 1) {
    throw httpErrorGenerator(422, '"level" must be greater than or equal to 1');
  }
}

function validatePassword(password: string) {
  if (!password) {
    throw httpErrorGenerator(400, '"password" is required');
  }
  if (typeof password !== 'string') {
    throw httpErrorGenerator(422, '"password" must be a string');
  }
  if (password.length < 8) {
    throw httpErrorGenerator(422, '"password" length must be at least 8 characters long');
  }
}

export default function userValidation(req: Request, _res: Response, next: NextFunction) {
  const { username, vocation, level, password } = req.body;
  validateUsername(username);
  validateVocation(vocation);
  validateLevel(level);
  validatePassword(password);
  next();
}
