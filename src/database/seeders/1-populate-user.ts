import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.bulkInsert('user', [{
          name: "admin",
          email: "admin@admin.com",
          password: "$2a$10$xzMrCRtST3WU6Uid6EC0Cu33RtpNlulI12Ey0TPwH5j49CEzUDMha",
          isAdm: 1,
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          name: "Cliente Teste",
          email: "cliente@cliente.com",
          password: "$2a$10$FqCZADE/BPah3Ebp1jkTg.uXKBOXDnOEBuUbMwwHEgQp.67duPkN.",
          isAdm: 0,
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }])
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.bulkDelete('user', {}, {});
    },
};