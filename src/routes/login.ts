import { Router } from 'express';
import loginController from '../controllers/LoginController';
import loginValidation from '../Validations/Login/userLogin';

const router = Router();

router.post("/", loginValidation, loginController.login);

export default router;