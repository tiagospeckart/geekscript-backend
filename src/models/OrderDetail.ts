import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";
import User from "./User";

const connection = mySqlConection.getInstance();

const OrderDetail = connection.define("OrderDetail", {
  id_order_detail_: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total: {
    type: DataTypes.DECIMAL,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default OrderDetail;
