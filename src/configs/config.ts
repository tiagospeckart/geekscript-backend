import dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config();

const config = {
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    name: process.env.DB_NAME as string || 'geek_script',
    user: process.env.DB_USER as string,
    pass: process.env.DB_PASS as string,
    dialect: process.env.DB_DIALECT as Dialect || 'mysql',
  },
  app: {
    port: Number(process.env.APP_PORT) || 5000,
  },
  node_env: process.env.NODE_ENV || 'development',
  secret: process.env.SECRET as string,
};

export default config;
