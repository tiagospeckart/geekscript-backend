import { QueryInterface, DataTypes } from "sequelize"

export default {
  up: (queryInterface: QueryInterface) =>{
    return queryInterface.bulkInsert('product', [{
      name: "Dominion",
      photo: "https://upload.wikimedia.org/wikipedia/en/b/b5/Dominion_game.jpg",
      category_id: 1,
      price: 201.82,
      description: "Dominion is a card game created by Donald X. Vaccarino and published by Rio Grande Games. It was the first deck-building game, and inspired a genre of games building on its central mechanic. Each player begins with a small deck of cards, which they improve by purchasing cards from a common supply that varies from game to game. Cards can help the player's deck function, impede their opponents, or provide victory points. As of December 2022, fifteen expansions to the original Dominion have been released.",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: "Terraforming Mars",
      photo: "https://upload.wikimedia.org/wikipedia/en/f/f0/Terraforming_Mars_board_game_box_cover.jpg",
      category_id: 1,
      price: 308.90,
      description: "Terraforming Mars is a board game for 1 to 5 players designed by Jacob Fryxelius and published by FryxGames in 2016, and thereafter by 12 others, including Stronghold Games.",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: "Hades",
      photo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg",
      category_id: 2,
      price: 189.90,
      description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },{
      name: "Red Dead Redemption 2",
      photo: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
      category_id: 2,
      price: 249.95,
      description: "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
  ])
  },
  down: (queryInterface: QueryInterface)=>{
    return queryInterface.bulkDelete('product', {}, {});
  },
};