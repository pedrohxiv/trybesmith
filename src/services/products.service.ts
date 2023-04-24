import productsModel from '../models/products.model';

async function create(name: string, amount: string) {
  const newProduct = await productsModel.create(name, amount);
  return newProduct;
}

async function getAll() {
  const products = await productsModel.getAll();
  return products;
}

export default {
  create,
  getAll,
};
