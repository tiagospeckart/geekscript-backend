import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import loginValidation from '../validations/Login/userLogin';

const router = Router();

router.post("/", loginValidation, LoginController.login);

export default router;