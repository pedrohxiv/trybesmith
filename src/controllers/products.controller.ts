import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  const newProduct = await productsService.create(name, amount);
  res.status(201).json(newProduct);
}

async function getAll(_req: Request, res: Response) {
  const products = await productsService.getAll();
  res.status(200).json(products);
}

export default {
  create,
  getAll,
};
