import {DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import { mySqlConection } from "../database";

const dbConnection = mySqlConection.getInstance();

interface Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
  id_category: CreationOptional<number>;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const Category = dbConnection.define<Category>(
  "Category",
  {
    id_category: {
      type: DataTypes.INTEGER.UNSIGNED,
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
  },
  {
    tableName: "category",
  }
);

export default Category;
