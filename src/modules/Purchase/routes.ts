import { Router } from 'express';
import controller from './controller';
import createValidation from '../../Validations/Purchase/create';
import updateValidation from '../../Validations/Purchase/update';

const routes = Router();

routes.post('/purchase', createValidation, controller.create);
routes.get('/purchase', controller.findAll);
routes.get('/purchase/:id', controller.findOne);
routes.put('/purchase/:id', updateValidation, controller.update);
routes.delete('/purchase/:id', controller.delete);

export default routes;
