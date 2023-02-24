import { Router } from 'express';
import userRoutes from '../../modules/User/routes';
import productRoutes from '../../modules/Product/routes';
import categoryRoutes from '../../modules/Category/routes';
import purchaseRoutes from '../../modules/Purchase/routes';
import loginRoute from '../../modules/Login/route';

const routes = Router();

routes.use(userRoutes);
routes.use(productRoutes);
routes.use(categoryRoutes);
routes.use(purchaseRoutes);
routes.use(loginRoute);

export default routes;
