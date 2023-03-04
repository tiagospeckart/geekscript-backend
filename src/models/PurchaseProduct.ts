import {DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, Model, ForeignKey,Sequelize} from 'sequelize';
import { mySqlConection } from '../database';
import Product from './Product';
import Purchase from './Purchase';

const dbConnection = mySqlConection.getInstance();

interface PurchaseProduct
  extends Model<InferAttributes<PurchaseProduct>,InferCreationAttributes<PurchaseProduct>> {
  id_purchase_product: CreationOptional<number>;
  purchase_id: ForeignKey<number>;
  product_id: ForeignKey<number>;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
  deletedAt: CreationOptional<Date>;
}

const PurchaseProduct= dbConnection.define<PurchaseProduct>(
  'PurchaseProduct',
  {
    id_purchase_product: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    purchase_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Purchase,
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
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
    tableName: 'purchase_product',
    paranoid: true
  }
);

export default PurchaseProduct;
