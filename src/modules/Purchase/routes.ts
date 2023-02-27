import { Router } from 'express';
import controller from './controller';
import createValidation from '../../Validations/Purchase/create';
import updateValidation from '../../Validations/Purchase/update';
import userAuthentication from "../../Middlewares/authentication";

const routes = Router();

routes.post('/purchase', userAuthentication, createValidation, controller.create);
routes.get('/purchase', controller.findAll);
routes.get('/purchase/:id', controller.findOne);
routes.put('/purchase/:id', userAuthentication, updateValidation, controller.update);
routes.delete('/purchase/:id', userAuthentication, controller.delete);

export default routes;
