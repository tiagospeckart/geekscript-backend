import { QueryInterface, DataTypes } from "sequelize"

export default {
    up: (queryInterface: QueryInterface) =>{
        return queryInterface.bulkInsert('category', [{
          name: "Dominion",
          // photo: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Dominion_game.jpg',
          category_id: 1,
          price: 201.82,
          description: "Dominion is a card game created by Donald X. Vaccarino and published by Rio Grande Games. It was the first deck-building game, and inspired a genre of games building on its central mechanic. Each player begins with a small deck of cards, which they improve by purchasing cards from a common supply that varies from game to game. Cards can help the player's deck function, impede their opponents, or provide victory points. As of December 2022, fifteen expansions to the original Dominion have been released.",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        },
        {
          name: "Hades",
          //photo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg",
          category_id: 2,
          price: 189.90,
          description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
          createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
          updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
        }])
    },
    down: (queryInterface: QueryInterface)=>{
        return queryInterface.bulkDelete('category', {}, {});
    },
};