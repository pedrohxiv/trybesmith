import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(_req: Request, res: Response) {
  const users = await ordersService.getAll();
  res.status(200).json(users);
}

export default {
  getAll,
};
