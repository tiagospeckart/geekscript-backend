import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.createTable('user', {
            id_user: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            isAdm: {
                type: DataTypes.TINYINT,
                defaultValue: 0
            } ,
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        })
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.dropTable('user');
    },
};