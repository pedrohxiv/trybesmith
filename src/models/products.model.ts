import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../types/Product';

async function create(name: string, amount: string): Promise<Product> {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const newProduct: Product = { id, name, amount };
  return newProduct;
}

async function getAll(): Promise<Product[]> {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return products as Product[];
}

export default {
  create,
  getAll,
};
