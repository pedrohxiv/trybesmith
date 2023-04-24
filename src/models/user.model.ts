import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../types/User';

async function create(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<User> {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const newUser: User = { id, username, vocation, level, password };
  return newUser;
}

export default {
  create,
};
