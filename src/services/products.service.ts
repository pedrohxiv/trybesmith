import productsModel from '../models/products.model';

async function create(name: string, amount: string) {
  const newProduct = await productsModel.create(name, amount);
  return newProduct;
}

export default {
  create,
};
