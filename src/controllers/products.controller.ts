import { NextFunction, Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, amount } = req.body;
    const newProduct = await productsService.create(name, amount);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
}

async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const products = await productsService.getAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  getAll,
};
