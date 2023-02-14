import { Router } from "express";
import productController from "./controller";

const routes = Router();

routes.post("/user", productController.create);
routes.get("/user", productController.findAll);
routes.get("/user/:id", productController.findOne);
routes.put("/user/:id", productController.update);
routes.delete("/user/:id", productController.delete);

export default routes;