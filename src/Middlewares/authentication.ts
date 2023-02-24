import { expressjwt } from 'express-jwt';
import key from '../configs/jwtKey';

export default expressjwt({
  secret: key.privateKey,
  algorithms: ['HS256'],
});
