import { Router } from "express";
import userRoutes from "../../modules/User/routes";
import productRoutes from "../../modules/Product/routes";
import categoryRoutes from "../../modules/Category/routes";

const routes = Router();

routes.use(userRoutes);
routes.use(productRoutes);
routes.use(categoryRoutes);

export default routes;
