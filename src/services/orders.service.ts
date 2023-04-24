import ordersModel from '../models/orders.model';

async function getAll() {
  const users = await ordersModel.getAll();
  return users;
}

export default {
  getAll,
};
