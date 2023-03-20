import MockConnection from "./mockConnection";
import { Options } from "sequelize";

const dbName = 'test_db';
const dbUser = 'test_user';
const dbPass = 'test_password';
const dbConfig: Options = {
  // Fake or default options for testing
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  logging: false,
};

const connection = new MockConnection(dbName, dbUser, dbPass, dbConfig);
