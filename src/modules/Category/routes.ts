import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/category", controller.create);
routes.get("/category", controller.findAll);
routes.get("/category/:id", controller.findOne);
routes.put("/category/:id", controller.update);
routes.delete("/category/:id", controller.delete);

export default routes;