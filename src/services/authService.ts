import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../configs/config';

export default class AuthService {
  static findUserByEmail = async (email: string) => {
    return await User.findOne({ where: { email } });
  };

  static validatePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
  };

  static generateToken = (
    id_user: number,
    name: string,
    email: string,
    scope: string
  ): string => {
    return jwt.sign(
      { id_user, name, email, scope },
      config.secret,
      { expiresIn: '1 day' }
    );
  };
}