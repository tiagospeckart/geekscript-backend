import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('category', {
            id_category: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
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
        })
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.dropTable('category');
    },
};