import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";
import { AI } from "./ai";
import { css } from "./style.css";
import Hit from "./hit.svg";
import Miss from "./miss.svg";

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
//Test ship placements - Player

let playerBoardHTML = document.querySelector(".playerBoard");
let aiBoardHTML = document.querySelector(".aiBoard");
// console.log(playerBoard.getBoardArray());

createBoard("playerBoard");
createBoard("aiBoard");

//Player random ship placement
randomShipPlacement(carrier, playerBoard);
randomShipPlacement(battleship, playerBoard);
randomShipPlacement(destroyer, playerBoard);
randomShipPlacement(submarine, playerBoard);
randomShipPlacement(patrolBoat, playerBoard);
//AI random ship placement
randomShipPlacement(carrierAI, aiBoard);
randomShipPlacement(battleshipAI, aiBoard);
randomShipPlacement(destroyerAI, aiBoard);
randomShipPlacement(submarineAI, aiBoard);
randomShipPlacement(patrolBoatAI, aiBoard);

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
function randomShipPlacement(shipName, boardName) {
  let arrayX = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let arrayY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let placementCoordinates =
    arrayX[Math.floor(Math.random() * 10)] +
    arrayY[Math.floor(Math.random() * 10)];
  // console.log("Checking:" + placementCoordinates);
  let alignment = Math.floor(Math.random() * 2);
  if (
    boardName.checkShipPlacement(
      placementCoordinates.substring(0, 1),
      placementCoordinates.substring(1, 3),
      shipName.shipLength,
      alignment
    )
  ) {
    boardName.placeShip(placementCoordinates, shipName, alignment);
    for (let i = 0; i < shipName.shipLength; i++) {
      // let shipCell = document.querySelector(
      //   `.${boardName}.${shipName.coordinates[i]}`
      // );
      let shipCell = shipName.coordinates[i];
      if (boardName == playerBoard) {
        let shipCellHTML = document.querySelector(
          `.playerBoardCell.${shipCell}`
        );
        // console.log(shipCellHTML);
        shipCellHTML.classList.add("ship");
      } else if (boardName == aiBoard) {
        let shipCellHTML = document.querySelector(`.aiBoardCell.${shipCell}`);
        // console.log(shipCellHTML);
        shipCellHTML.classList.add("ship");
      }
    }
  } else randomShipPlacement(shipName, boardName);
}

function attackEvent(element) {
  console.log("player attack:" + element.classList[1]); // "F5"
  // aiBoard.receiveAttack(element.classList[1]);
  if (element.classList.contains("hit") || element.classList.contains("miss")) {
    return console.log("already guessed");
  } else {
    player.attack(element.classList[1], ai, aiBoard);
    if (aiBoard.allSunk()) {
      alert("You win!!!!");
    }
    updateDisplay("aiBoard", aiBoard);
    ai.randomAttack();
    if (playerBoard.allSunk()) {
      alert("AI wins!!!!");
    }
    updateDisplay("playerBoard", playerBoard);
  }
}
function updateDisplay(boardName, board) {
  let boardNameCell = boardName + "Cell";
  // console.log(boardNameCell);
  // let shipCellHTML = document.querySelector(`.aiBoardCell.${shipCell}`);
  let hitArray = board.getHitAttackArray();
  let missArray = board.getMissedAttackArray();
  // console.log(hitArray);
  // console.log(missArray);
  for (let i = 0; i < hitArray.length; i++) {
    let shipCellHTML = document.querySelector(
      `.${boardNameCell}.${hitArray[i]}`
    );
    if (shipCellHTML.classList.contains("hit")) {
      continue;
    }
    shipCellHTML.classList.add("hit");
    let hit = new Image();
    hit.src = Hit;
    hit.classList.add("image");
    hit.classList.add("hit");
    shipCellHTML.appendChild(hit);
    // shipCellHTML.removeEventListener("click");
    // console.log(shipCellHTML);
  }
  for (let j = 0; j < missArray.length; j++) {
    let shipCellHTML = document.querySelector(
      `.${boardNameCell}.${missArray[j]}`
    );
    if (shipCellHTML.classList.contains("miss")) {
      continue;
    }
    shipCellHTML.classList.add("miss");
    let miss = new Image();
    miss.src = Miss;
    miss.classList.add("image");
    miss.classList.add("miss");
    shipCellHTML.appendChild(miss);
    // shipCellHTML.removeEventListener("click");
  }
  let lastMove = document.querySelector(`.${boardName}`).parentElement
    .childNodes[5];
  lastMove.textContent = board.lastMove;
}

// module.exports = {
//   Ship: Ship,
//   Gameboard: Gameboard,
//   Player: Player,
//   AI: AI,
// };
