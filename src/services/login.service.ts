import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';
import httpErrorGenerator from '../utils/httpErrorGenerator';

async function validateUserAndPassword(username: string, password: string) {
  if (!username) {
    throw httpErrorGenerator(400, '"username" is required');
  }
  if (!password) {
    throw httpErrorGenerator(400, '"password" is required');
  }
  const user = await userModel.getByUsername(username);
  if (user === undefined || user.password !== password) {
    throw httpErrorGenerator(401, 'Username or password invalid');
  }
  return {
    id: user.id,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
    password: user.password,
  };
}

async function signin(username: string, password: string) {
  const user = await validateUserAndPassword(username, password);
  return {
    token: jwt.sign(user, process.env.JWT_SECRET || 'secret', {
      expiresIn: '180d',
      algorithm: 'HS256',
    }),
  };
}

export default {
  signin,
};
