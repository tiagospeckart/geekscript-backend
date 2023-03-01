import { Router } from 'express';
import product from './product';
import purchase from './purchase';
import login from './login';
import category from './category';
import user from './user';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument  from "../api-docs/swagger.json";

const router = Router();

router.use('/', product)
router.use('/user', user);
router.use('/product', product);
router.use('/category',category);
router.use('/purchase', purchase);
router.use('/login', login);
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router