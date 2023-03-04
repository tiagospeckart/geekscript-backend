import {DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model, ForeignKey} from "sequelize";
import { mySqlConection } from "../database";
import User from "./User";

const dbConnection = mySqlConection.getInstance();


interface Purchase extends Model<InferAttributes<Purchase>, InferCreationAttributes<Purchase>> {
  id_purchase: CreationOptional<number>;
  user_id: ForeignKey<number>;
  total: number;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
}

const Purchase = dbConnection.define<Purchase>(
  "Purchase",
  {
    id_purchase: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    total: {
      type: DataTypes.DECIMAL,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
    }
  },
  {
    tableName: "purchase",
    paranoid: true
  }
);

export default Purchase;
