import { NextFunction, Request, Response } from 'express';
import loginService from '../services/login.service';

async function signin(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password } = req.body;
    const login = await loginService.signin(username, password);
    res.status(200).json(login);
  } catch (error) {
    next(error);
  }
}

export default {
  signin,
};
