import Connection from "./connection";
import config from "../configs/config";

const mySqlConection = new Connection(
  config.db.name,
  config.db.user,
  config.db.pass,
  {
    dialect: config.db.dialect,
    port: config.db.port,
    host: config.db.host,
  }
);

export { mySqlConection };