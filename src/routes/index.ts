import { Router } from 'express';
import product from './product';
import purchase from './purchase';
import login from './login';
import category from './category';
import user from './user';
import checkout from './checkout';
import discount from './discount'
import userAuthentication from "../Middlewares/authentication";
import adminVerification from "../Middlewares/adminVerification";
import productController from '../controllers/ProductController';


const router = Router();

router.use('/home', productController.findAll);
router.use('/user', user);
router.use('/product', product);
router.use('/category',category);
router.use('/purchase', purchase);
router.use('/login', login);
router.use('/checkout', userAuthentication, checkout);
router.use('/discount', userAuthentication, adminVerification, discount);

export default router