import * as swaggerDocument from '../../api-docs/swagger.json'
import 'dotenv/config'
import config from '../../configs/config';
import { mySqlConection } from "../../database";
import Express, { Application } from "express";
import router from "../../routes"
import handleError from "../../middlewares/handleError";
import cors from "cors";
import swaggerUi from 'swagger-ui-express'

type SetupOptions = {
  isTest?: boolean;
  port?: number;
};
export default class App {
  private instance: Application;
  private defaultPort: number = 5000;

  constructor() {
    this.instance = Express();
  }

  setup(options: SetupOptions): void {
    mySqlConection.hasConection();
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.json());
    this.instance.use(cors());
    this.instance.use("/", router);
    this.instance.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.instance.use(handleError);

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.info(`Server listening on Port: ${selectedPort}`)
    );
  }

  getInstance() {
    return this.instance;
  }
}