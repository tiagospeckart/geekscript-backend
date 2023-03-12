import { Router } from 'express';
import PurchaseController from '../controllers/PurchaseController';
import UserController from '../controllers/UserController';
import updateValidation from "../validations/User/update";
import userAuthentication from "../middlewares/authentication";
import adminVerification from '../middlewares/adminVerification';

const router = Router();

// Temos que ver direito como rotear as compras
// Clientes acessam todas as deles
// Admins acessam todas
// Passar middleware de Adm no getAll

router.get('/admin', adminVerification, PurchaseController.findAll);
router.get('/:id', UserController.findAllUserPurchase); // refactor
router.put('/admin/:id', adminVerification, updateValidation, PurchaseController.update);
router.delete('/admin/:id', adminVerification, PurchaseController.delete);

export default router;
