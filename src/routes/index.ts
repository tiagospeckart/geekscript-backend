import { Router } from 'express';
import product from './product';
import productController from '../controllers/ProductController';
import purchase from './purchase';
import login from './login';
import category from './category';
import user from './user';
import checkout from './checkout';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument  from "../api-docs/swagger.json";

const router = Router();

router.use('/home', productController.findAll);
router.use('/user', user);
router.use('/product', product);
router.use('/category',category);
router.use('/purchase', purchase);
router.use('/login', login);
<<<<<<< HEAD
router.use('/checkout', checkout);
router.use('/api_doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
=======
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
>>>>>>> main

export default router