import { QueryInterface, DataTypes } from "sequelize"

export default {
  up: (queryInterface: QueryInterface) =>{
    return queryInterface.createTable('discount', {
      id_discount: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      value:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
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
    }, {
      logging: console.log
  })
  },
  down: (queryInterface: QueryInterface)=>{
    return queryInterface.dropTable('discount');
  },
};