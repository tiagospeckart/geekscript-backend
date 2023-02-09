import express from "express";
import { mySqlConection } from "./database";
import "dotenv/config";

const app = express();

app.use(express.json());

mySqlConection.hasConection();

app.listen(process.env.APP_PORT || 5000, () => {
  console.info(`Server listening on Port: ${process.env.APP_PORT}`);
});

export default app;
