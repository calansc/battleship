import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";
import { AI } from "./ai";

//Player Ships
let carrier = new Ship(5);
let battleship = new Ship(4);
let destroyer = new Ship(3);
let submarine = new Ship(3);
let patrolBoat = new Ship(2);
//AI Ships
let carrierAI = new Ship(5);
let battleshipAI = new Ship(4);
let destroyerAI = new Ship(3);
let submarineAI = new Ship(3);
let patrolBoatAI = new Ship(2);
//Gameboards
let playerBoard = new Gameboard();
let aiBoard = new Gameboard();
//Players
let player = new Player("Chad");
let ai = new AI("AI", player, playerBoard);

let playerBoardHTML = document.querySelector(".playerBoard");
let aiBoardHTML = document.querySelector(".aiBoard");
console.log(playerBoardHTML);
console.log(aiBoardHTML);

// module.exports = {
//   Ship: Ship,
//   Gameboard: Gameboard,
//   Player: Player,
//   AI: AI,
// };
