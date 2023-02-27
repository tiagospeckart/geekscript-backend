import Connection from "./connection";
import { authDB } from "../configs/authDB";

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