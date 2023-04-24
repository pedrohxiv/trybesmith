import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  const newProduct = await productsService.create(name, amount);
  res.status(201).json(newProduct);
}

export default {
  create,
};
