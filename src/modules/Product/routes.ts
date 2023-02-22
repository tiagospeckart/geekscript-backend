import { Router } from "express";
import controller from "./controller";
import createValidation from "../../Validations/Product/create";
import updateValidation from "../../Validations/Product/update";

const routes = Router();

routes.post("/product", createValidation, controller.create);
routes.get("/product", controller.findAll);
routes.get("/product/:id", controller.findOne);
routes.put("/product/:id",  updateValidation, controller.update);
routes.delete("/product/:id", controller.delete);

export default routes;