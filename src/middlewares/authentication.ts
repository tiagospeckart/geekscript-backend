import { expressjwt } from 'express-jwt';
import config from '../configs/config';

export default expressjwt({
  secret: config.secret,
  algorithms: ['HS256'],
});
