import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('purchase', {
            id_purchase: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: `user`,
                    },
                    key: `id_user`,
                },
                allowNull: false
            },
            discount_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model:{
                        tableName: 'discount'
                    },
                    key: 'id_discount'
                },
                allowNull: true,
                defaultValue: null
            },
            total: {
                type: DataTypes.DECIMAL(18,2),
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
        return queryInterface.dropTable('purchase');
    },

};