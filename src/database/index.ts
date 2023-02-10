import Connection from "./connection";
import { authDB } from "../infra/config/authDB";

const mySqlConection = new Connection(
  authDB.database,
  authDB.username,
  authDB.password,
  {
    dialect: authDB.dialect,
    port: authDB.port,
    host: authDB.host,
  }
);

export { mySqlConection };