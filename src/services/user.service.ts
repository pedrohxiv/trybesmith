import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';

async function create(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const newUser = await userModel.create(username, vocation, level, password);
  return {
    token: jwt.sign(newUser, process.env.JWT_SECRET || 'secret', {
      expiresIn: '180d',
      algorithm: 'HS256',
    }),
  };
}

export default {
  create,
};
