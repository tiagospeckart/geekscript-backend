import { Router } from "express";
import userController from "../controllers/UserController";
import createValidation from "../Validations/User/create";
import updateValidation from "../Validations/User/update";
import userAuthentication from "../Middlewares/authentication";

const router = Router();

router.post("/register", createValidation, userController.create);
router.get("/admin", userAuthentication, userController.findAll);
router.get("/:id", userAuthentication, userController.findOne);
router.put("/:id", userAuthentication, updateValidation, userController.update);
router.delete("/:id", userAuthentication, userController.delete);

export default router;