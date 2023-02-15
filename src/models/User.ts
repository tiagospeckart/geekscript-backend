import {DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import { mySqlConection } from "../database";

const dbConnection = mySqlConection.getInstance();

interface User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id_user: CreationOptional<number>;
  name: string;
  email: string;
  password: string;
  isAdm: number;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}

const User = dbConnection.define<User>(
  "User",
  {
    id_user: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    isAdm: {
      type: DataTypes.TINYINT,
    } ,
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }, 
  },
  {
    tableName: "user",
  }
);

export default User;