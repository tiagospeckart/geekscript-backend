import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.bulkInsert('discount', [{
          id_discount: 1,
          value: 15,
          name: 'cupom15', 
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },{
          id_discount: 2,
          value: 50,
          name: 'cupom50', 
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }
      ])
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.bulkDelete('discount', {}, {});
    },
};