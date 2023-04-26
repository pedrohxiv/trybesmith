import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../types/User';
import { Order } from '../types/Order';

async function getAll(): Promise<User[]> {
  const [users] = await connection.execute<RowDataPacket[]>(
    `SELECT orders.id, orders.user_id AS userId,
     JSON_ARRAYAGG(products.id) AS productsIds
     FROM Trybesmith.orders
     JOIN Trybesmith.products ON orders.id = products.order_id
     GROUP BY orders.id, orders.user_id`,
  );
  return users as User[];
}

async function create(productsIds: number[], userId: number): Promise<Order> {
  const [{ insertId: orderId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [userId],
  );
  await Promise.all(
    productsIds.map(async (productsId) =>
      connection.execute('UPDATE Trybesmith.products SET order_id = ? WHERE id = ?', [
        orderId,
        productsId,
      ])),
  );
  return { userId, productsIds };
}

export default {
  getAll,
  create,
};
