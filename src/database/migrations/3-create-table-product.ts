import { QueryInterface, DataTypes} from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('product', {
            id_product: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            photo: {
                type: DataTypes.STRING,
                allowNull: false
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
                type: DataTypes.DECIMAL(18,2),
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
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
        return queryInterface.dropTable('product');
    },
};