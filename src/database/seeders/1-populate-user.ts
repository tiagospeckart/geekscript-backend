import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.bulkInsert('user', [{
          name: "admin",
          email: "admin@admin.com",
          password: "$2a$10$JictknZGMcThCtg5Xld07u62DE.9of6q22uIWljDayU0E4k7NTB4q",
          scope: 'admin',
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          name: "client",
          email: "client@client.com",
          password: "$2a$10$A4WbUIXOlvOk0wITH98mM.geSbBIN2o/xx.MvqLHjCBJ.3xQeRJDi",
          scope: 'client',
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }])
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.bulkDelete('user', {}, {});
    },
};