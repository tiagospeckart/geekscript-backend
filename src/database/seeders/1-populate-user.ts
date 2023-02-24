import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.bulkInsert('user', [{
          name: "admin",
          email: "admin@admin.com",
          password: "admin123",
          isAdm: 1,
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          name: "Cliente Teste",
          email: "cliente@cliente.com",
          password: "cliente123",
          isAdm: 0,
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }])
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.bulkDelete('user', {}, {});
    },
};