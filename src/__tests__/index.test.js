const index = require("../index");
// REMEMBER you only have to test your object’s public interface.
// Only methods or properties that are used outside of your ‘ship’
// object need unit tests.
// beforeEach(() => {
//   const ship2 = new index.Ship(2);
// });
const ship2 = new index.Ship(2);
test("Ship Class", () => {
  expect(ship2).toEqual({
    shipLength: 2,
    hits: 0,
    isSunk: false,
    coordinates: [],
  });
});
test("Ship hit counter(1)", () => {
  expect(ship2.hitCount()).toEqual(false);
});
test("Ship hit counter(2)", () => {
  expect(ship2.hitCount()).toEqual(true);
});

const gameboard = new index.Gameboard();
test("Game Board", () => {
  expect(gameboard.board[0]).toEqual("A1");
  expect(gameboard.board[1]).toEqual("B1");
  expect(gameboard.board[10]).toEqual("A2");
  expect(gameboard.board[99]).toEqual("J10");
});

let carrier = new index.Ship(5);
let battleship = new index.Ship(4);
let destroyer = new index.Ship(3);
let submarine = new index.Ship(3);
let patrolBoat = new index.Ship(2);

test("Place Ship", () => {
  expect(gameboard.placeShip("A1", patrolBoat, 1)).toEqual({
    coordinates: ["A1", "A2"],
    hits: 0,
    isSunk: false,
    shipLength: 2,
  });
  expect(gameboard.placeShip("B4", battleship, 0)).toEqual({
    coordinates: ["B4", "C4", "D4", "E4"],
    hits: 0,
    isSunk: false,
    shipLength: 4,
  });
});

test("Receive Attack", () => {
  expect(gameboard.receiveAttack("A1")).toEqual(false);
  expect(gameboard.receiveAttack("B2")).toEqual(1);
  expect(gameboard.receiveAttack("D4")).toEqual(false);
  expect(gameboard.receiveAttack("A2")).toEqual(true);
});

test("All Sunk Check", () => {
  expect(gameboard.allSunk()).toEqual(false);
});
