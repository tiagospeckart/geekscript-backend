import { Router } from "express";
import controller from "./controller";
import createValidation from "../../Validations/User/create";
import updateValidation from "../../Validations/User/update";

const routes = Router();

routes.post("/user", createValidation, controller.create);
routes.get("/user", controller.findAll);
routes.get("/user/:id", controller.findOne);
routes.put("/user/:id", updateValidation, controller.update);
routes.delete("/user/:id", controller.delete);

export default routes;
