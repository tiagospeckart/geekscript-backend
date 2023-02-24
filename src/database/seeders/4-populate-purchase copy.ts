import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.bulkInsert('purchase', [{
          user_id: 1,
          total: 393.73,
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },{
          user_id: 2,
          total: 558.85,
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
      ])
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.bulkDelete('purchase', {}, {});
    },
};