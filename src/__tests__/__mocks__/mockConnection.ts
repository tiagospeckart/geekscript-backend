// __mocks__/mockConnection.ts
import { Options } from "sequelize";
import logger from "../../infra/logger";

export default class MockConnection {
  private instance: any;
  private db_name: string;
  private db_user: string;
  private db_pass: string;
  private db_config: Options;

  constructor(
    dbName: string,
    dbUser: string,
    dbPass: string,
    dbConfig: Options
  ) {
    this.db_name = dbName;
    this.db_user = dbUser;
    this.db_pass = dbPass;
    this.db_config = dbConfig;

    // Replace the Sequelize instance with a simple object to simulate the behavior
    this.instance = {
      authenticate: async () => {
        // You can add any custom behavior here if needed
      },
    };
  }

  getInstance() {
    return this.instance;
  }

  async hasConnection() {
    try {
      await this.instance.authenticate();
      logger.info(`Database: ${this.db_name} connected`);
    } catch (err) {
      logger.error("Can't establish database connection:\n", err);
      throw err;
    }
  }
}
