import express from "express";
import { mySqlConection } from "./database";
import "dotenv/config";
import BaseRoutes from "./infra/BaseRoutes"

const app = express();

app.use(express.json());
app.use(BaseRoutes);

mySqlConection.hasConection();

app.listen(process.env.APP_PORT || 5000, () => {
  console.info(`Server listening on Port: ${process.env.APP_PORT}`);
});

export default app;
