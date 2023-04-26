import { NextFunction, Request, Response } from 'express';
import MESSAGE from '../constants/messages';
import AuthService from '../services/authService';
interface LoginRequestBody {
  email: string;
  password: string;
}
export default class LoginController {
  static login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const { email, password } = req.body as LoginRequestBody;

      const user = await AuthService.findUserByEmail(email);

      if (!user) {
        return res
          .status(401)
          .json({ "message": MESSAGE.ERROR.INVALID_DATA });
      };

      const isPasswordValid = await AuthService.validatePassword(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: MESSAGE.ERROR.INVALID_DATA });
      };
    
      const token = AuthService.generateToken(user.id_user, user.name, user.email, user.scope);

      return res.status(200).json({ id: user.id_user, token: token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: MESSAGE.ERROR.TOKEN });
    }
  };
}