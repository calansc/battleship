const index = require("./src/index");
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
  expect(ship2.hitCount()).toEqual(1);
});
test("Ship is sunk check(false)", () => {
  expect(ship2.isSunkCheck()).toEqual(false);
});
test("Ship hit counter(2)", () => {
  expect(ship2.hitCount()).toEqual(2);
});
test("Ship is sunk check(true)", () => {
  expect(ship2.isSunkCheck()).toEqual(true);
});

const gameboard = new index.Gameboard();
test("Game Board", () => {
  expect(gameboard.board[0]).toEqual("A1");
  expect(gameboard.board[1]).toEqual("B1");
  expect(gameboard.board[10]).toEqual("A2");
  expect(gameboard.board[99]).toEqual("J10");
});
test("Place Ship", () => {
  expect(gameboard.placeShip("A1", 2, 1, "cruise")).toEqual({
    coordinates: ["A1", "A2"],
    hits: 0,
    isSunk: false,
    shipLength: 2,
  });
});
