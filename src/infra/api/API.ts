import * as swaggerDocument from '../../api-docs/swagger.json'
import 'dotenv/config'
import express from "express";
import router from "../../routes"
import handleError from "../../Middlewares/handleError";
import cors from "cors";
import { mySqlConection } from "../../database";
import swaggerUi from 'swagger-ui-express'

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(cors());
app.use("/", router)
app.use(handleError);

mySqlConection.hasConection();

export default app;