import { Router } from 'express';
import controller from './controller';
import loginValidation from '../../Validations/Login/userLogin';

const routes = Router();

routes.post('/login', loginValidation, controller.login);

export default routes;