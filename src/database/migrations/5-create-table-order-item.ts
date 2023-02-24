import { QueryInterface, DataTypes} from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('order_item', {
            id_order_item: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            product_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: `product`
                    },
                    key: `id_product`,
                },
                allowNull: false
            },
            order_detail_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: `order_detail`
                    },
                    key: `id_order_detail`,
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
        })
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.dropTable('order_item');
    },
};