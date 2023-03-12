import { expressjwt } from 'express-jwt';
import 'dotenv/config';

export default expressjwt({
  secret: process.env.SECRET as string,
  algorithms: ['HS256'],
});
