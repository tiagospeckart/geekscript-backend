import { Router } from 'express';
import purchaseController from '../controllers/PurchaseController';
import updateValidation from "../Validations/User/update";
import userAuthentication from "../Middlewares/authentication";
import userController from '../controllers/UserController';

const router = Router();

// Temos que ver direito como rotear as compras
// Clientes acessam todas as deles
// Admins acessam todas
// Passar middleware de Adm no getAll

router.get('/admin', userAuthentication, purchaseController.findAll);
router.get('/:id', userAuthentication, userController.findAllUserPurchase);
router.put('/admin/:id', userAuthentication, updateValidation, purchaseController.update);
router.delete('/admin/:id', userAuthentication, purchaseController.delete);

export default router;
