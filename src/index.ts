import express from "express";
import 'dotenv/config'
import BaseRoutes from "./infra/BaseRoutes"
import handleError from "./Middlewares/handleError";
import cors from "cors";
import { mySqlConection } from "./database";

const app = express();

app.use(express.json());
app.use(cors());
app.use(BaseRoutes);
app.use(handleError);

mySqlConection.hasConection();

app.listen(process.env.APP_PORT || 5000, () => {
  console.info(`Server listening on Port: ${process.env.APP_PORT}`);
});

export default app;
