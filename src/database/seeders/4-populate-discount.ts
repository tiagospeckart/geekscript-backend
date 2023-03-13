import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.bulkInsert('discount', [{
          value: 15,
          name: 'coupon15', 
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },{
          value: 50,
          name: 'coupon50', 
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
      ])
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.bulkDelete('discount', {}, {});
    },
};