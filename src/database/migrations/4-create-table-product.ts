import { QueryInterface, DataTypes} from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('product', {
            id_product: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            photo: {
                type: DataTypes.STRING,
            },
            category_id: {
                type: DataTypes.INTEGER.UNSIGNED,
                references: {
                    model: {
                        tableName:`category`,
                    },
                    key: `id_category`,
                },
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL,
            },
            description: {
                type: DataTypes.TEXT,
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
        return queryInterface.dropTable('product');
    },
};