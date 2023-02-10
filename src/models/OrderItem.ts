import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";
import OrderDetail from "./OrderDetail";
import Product from "./Product";


const connection = mySqlConection.getInstance();

const OrderItem = connection.define("OrderItem", {
  id_order_item: {
    type: DataTypes.INTEGER,
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
});

export default OrderItem;
