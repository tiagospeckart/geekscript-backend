import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";

const connection = mySqlConection.getInstance();

const Category = connection.define("Category", {
  category_id: {
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
