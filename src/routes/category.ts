import { Router } from "express";
import { CategoryController } from '../controllers/CategoryController';
import { CategoryService } from '../services/CategoryService';
import createValidation from "../validations/Category/create";
import updateValidation from "../validations/Category/update";
import userAuthentication from "../middlewares/authentication";
import adminVerification from "../middlewares/adminVerification";

const router = Router();
const categoryService = new CategoryService();
const categoryController = new CategoryController(categoryService);

router.post("/admin/", userAuthentication, createValidation, adminVerification, categoryController.create);
router.get("/catalog", categoryController.findAll);
router.get("/:id", categoryController.findOne);
router.put("/admin/:id", userAuthentication, updateValidation, adminVerification, categoryController.update);
router.delete("/admin/:id", userAuthentication, adminVerification, categoryController.delete);

export default router;