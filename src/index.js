import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";

let gameboard = new Gameboard();
console.log(gameboard);

//Player Ships
let carrier = new Ship(5);
let battleship = new Ship(4);
let destroyer = new Ship(3);
let submarine = new Ship(3);
let patrolBoat = new Ship(2);

module.exports = {
  Ship: Ship,
  Gameboard: Gameboard,
  Player: Player,
};
