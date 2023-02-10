import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";

const connection = mySqlConection.getInstance();

const User = connection.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  senha: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default User;
