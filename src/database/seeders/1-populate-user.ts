import { QueryInterface, DataTypes } from "sequelize"

export default {
  up: (queryInterface: QueryInterface) =>{
    return queryInterface.bulkInsert('user', [{
      name: "admin",
      email: "admin@admin.com",
      password: "$2a$10$i4kCP2hgjlVcQWoVUVmFAu3y/BlR0YYmohQGXOeFztyRw.NnOupuq",
      scope: 'admin',
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: "client",
      email: "client@client.com",
      password: "$2a$10$q9fKFxDd/mmyGLZOQd.5xu6J35MEyeLjceYkJSjAUqlFHR22.Cnfq",
      scope: 'client',
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
  ])
  },
  down: (queryInterface: QueryInterface)=>{
    return queryInterface.bulkDelete('user', {}, {});
  },
};