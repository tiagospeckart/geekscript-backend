import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";

const dbConnection = mySqlConection.getInstance();

const Category = dbConnection.define("Category", {
  id_category: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default Category;
