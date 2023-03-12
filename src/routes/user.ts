import { Router } from "express";
import UserController from "../controllers/UserController";
import createValidation from "../validations/User/create";
import updateValidation from "../validations/User/update";
import userAuthentication from "../middlewares/authentication";

const router = Router();

router.post("/register", createValidation, UserController.create);
router.get("/admin", userAuthentication, UserController.findAll);
router.get("/:id", userAuthentication, UserController.findOne);
router.put("/:id", userAuthentication, updateValidation, UserController.update);
router.delete("/:id", userAuthentication, UserController.delete);

export default router;