import {DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model, ForeignKey} from "sequelize";
import { mySqlConection } from "../database";
import User from "./User";

const dbConnection = mySqlConection.getInstance();


interface OrderDetail extends Model<InferAttributes<OrderDetail>, InferCreationAttributes<OrderDetail>> {
  id_order_detail: CreationOptional<number>;
  total: number;
  user_id: ForeignKey<number>;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}

const OrderDetail = dbConnection.define<OrderDetail>(
  "OrderDetail",
  {
    id_order_detail: {
      type: DataTypes.INTEGER.UNSIGNED,
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
  },
  {
    tableName: "order_detail",
  }
);

export default OrderDetail;
