import { Router } from "express";
import controller from "./controller";
import createValidation from "../../Validations/Category/create";
import updateValidation from "../../Validations/Category/update";

const routes = Router();

routes.post("/category", createValidation, controller.create);
routes.get("/category", controller.findAll);
routes.get("/category/:id", controller.findOne);
routes.put("/category/:id", updateValidation, controller.update);
routes.delete("/category/:id", controller.delete);

export default routes;