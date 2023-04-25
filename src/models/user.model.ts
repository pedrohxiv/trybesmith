import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

async function getByUsername(username: string): Promise<User | undefined> {
  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return user as User | undefined;
}

export default {
  create,
  getByUsername,
};
