import { Router } from 'express';
import userAuthentication from "../middlewares/authentication";
import adminVerification from "../middlewares/adminVerification";
import ProductController from '../controllers/ProductController';
import productRoutes from './product';
import purchaseRoutes from './purchase';
import loginRoutes from './login';
import categoryRoutes from './category';
import userRoutes from './user';
import checkoutRoutes from './checkout';
import discountRoutes from './discount';

const router = Router();

router.use('/home', ProductController.findAll);
router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);
router.use('/purchase', userAuthentication, purchaseRoutes);
router.use('/login', loginRoutes);
router.use('/checkout', userAuthentication, checkoutRoutes);
router.use('/discount', userAuthentication, adminVerification, discountRoutes);

export default router