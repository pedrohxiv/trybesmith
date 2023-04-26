import jwt from 'jsonwebtoken';
import ordersModel from '../models/orders.model';
import { User } from '../types/User';

async function getAll() {
  const users = await ordersModel.getAll();
  return users;
}

async function create(productsIds: number[], authorization: string) {
  const { id } = jwt.decode(authorization) as User;
  const newOrder = await ordersModel.create(productsIds, id);
  return newOrder;
}

export default {
  getAll,
  create,
};
