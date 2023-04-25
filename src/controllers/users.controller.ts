import { NextFunction, Request, Response } from 'express';
import userService from '../services/user.service';

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, vocation, level, password } = req.body;
    const newUser = await userService.create(username, vocation, level, password);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
};
