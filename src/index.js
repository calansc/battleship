import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";
import { AI } from "./ai";
import { css } from "./style.css";

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
// console.log(playerBoard.getBoardArray());

createBoard("playerBoard");
createBoard("aiBoard");

function createBoard(boardName) {
  let boardNameHTML = document.querySelector(`.${boardName}`);
  let cellBoardClass = boardName + "Cell";
  for (let i = 0; i < playerBoard.getBoardArray().length; i++) {
    let cell = document.createElement("div");
    cell.classList.add(cellBoardClass);
    let cellClass = playerBoard.getBoardArray()[i];
    cell.classList.add(cellClass);
    if (boardName == "aiBoard") {
      cell.addEventListener("click", (e) => {
        attackEvent(e.target);
      });
    } else if (boardName == "playerBoard") {
      //add ship placement event listener's here
    }
    boardNameHTML.appendChild(cell);
  }
}

// module.exports = {
//   Ship: Ship,
//   Gameboard: Gameboard,
//   Player: Player,
//   AI: AI,
// };
