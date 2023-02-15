import {DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model, ForeignKey, Sequelize} from "sequelize";
import { mySqlConection } from "../database";
import OrderDetail from "./OrderDetail";
import Product from "./Product";

const dbConnection = mySqlConection.getInstance();

interface OrderItem extends Model<InferAttributes<OrderItem>, InferCreationAttributes<OrderItem>> {
  id_order_item: CreationOptional<number>;
  product_id: ForeignKey<number>
  order_detail_id: ForeignKey<number>
  quantity: number;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}

const OrderItem = dbConnection.define<OrderItem>(
  "OrderItem",
  {
    id_order_item: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },
    order_detail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: OrderDetail,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
    },

    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "order_item",
  }
);

export default OrderItem;
