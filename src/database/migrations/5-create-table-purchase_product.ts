import { QueryInterface, DataTypes} from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('purchase_product', {
            id_purchase_product: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            purchase_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: `purchase`
                    },
                    key: `id_purchase`,
                },
                allowNull: false
            },
            product_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: `product`
                    },
                    key: `id_product`,
                },
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        }, {
            logging: console.log
    })
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.dropTable('purchase_product');
    },
};