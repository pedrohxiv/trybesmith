import { NextFunction, Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const users = await ordersService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;
    const { productsIds } = req.body;
    const newOrder = await ordersService.create(productsIds, authorization ?? '');
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
}

export default {
  getAll,
  create,
};
