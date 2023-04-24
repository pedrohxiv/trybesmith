import { ResultSetHeader } from 'mysql2';
import connection from './connection';

async function create(name: string, amount: string) {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const newProduct = { id, name, amount };
  return newProduct;
}

export default {
  create,
};
