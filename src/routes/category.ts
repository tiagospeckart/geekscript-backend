import { Router } from "express";
import categoryController from "../controllers/CategoryController";
import createValidation from "../Validations/Category/create";
import updateValidation from "../Validations/Category/update";
import userAuthentication from "../Middlewares/authentication";

const router = Router();

router.post("/admin/", userAuthentication, createValidation, categoryController.create);
router.get("/catalog", categoryController.findAll);
router.get("/:id", categoryController.findOne);
router.put("/admin/:id", userAuthentication, updateValidation, categoryController.update);
router.delete("/admin/:id", userAuthentication, categoryController.delete);

export default router;