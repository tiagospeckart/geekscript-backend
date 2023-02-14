import { QueryInterface, DataTypes} from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('order_detail', {
            id_order_detail: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            total: {
                type: DataTypes.DECIMAL,
            },
            user_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName: `user`
                    },
                    key: `id_user`,
                },
                allowNull: false
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
        return queryInterface.dropTable('order_detail');
    },
};