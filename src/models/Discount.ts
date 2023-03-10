import { DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { mySqlConection } from '../database';

const dbConnection = mySqlConection.getInstance();

interface Discount
  extends Model<InferAttributes<Discount>, InferCreationAttributes<Discount>> {
  id_discount: CreationOptional<number>;
  name: string;
  value: number;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
}

const Discount = dbConnection.define<Discount>(
  'Discount',
  {
    id_discount: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.DECIMAL(3, 2),
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
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'discount',
    paranoid: true,
  }
);

export default Discount;
