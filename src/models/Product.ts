import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";
import Category from "./Category";

const connection = mySqlConection.getInstance();

const Product = connection.define("Product", {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  category_id: {
    type: DataTypes.STRING,
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
});

export default Product;
