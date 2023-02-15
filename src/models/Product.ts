import {DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model, ForeignKey} from "sequelize";
import { mySqlConection } from "../database";
import Category from "./Category";

const dbConnection = mySqlConection.getInstance();

interface Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  id_product: CreationOptional<number>;
  name: string;
  photo: string;
  category_id: ForeignKey<number>
  price: number;
  description: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}

const Product = dbConnection.define<Product>(
  "Product",
  {
    id_product: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: "id",
      },
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    description: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "product",
  }
);

export default Product;
