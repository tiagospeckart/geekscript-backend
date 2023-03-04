import { Router } from "express";
import categoryController from "../controllers/CategoryController";
import createValidation from "../Validations/Category/create";
import updateValidation from "../Validations/Category/update";
import userAuthentication from "../Middlewares/authentication";
import adminVerification from "../Middlewares/adminVerification";

const router = Router();

router.post("/admin/", userAuthentication, createValidation, adminVerification, categoryController.create);
router.get("/catalog", categoryController.findAll);
router.get("/:id", categoryController.findOne);
router.put("/admin/:id", userAuthentication, updateValidation, adminVerification, categoryController.update);
router.delete("/admin/:id", userAuthentication, adminVerification, categoryController.delete);

export default router;