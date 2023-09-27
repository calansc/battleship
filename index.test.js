const index = require("./src/index");
// REMEMBER you only have to test your object’s public interface.
// Only methods or properties that are used outside of your ‘ship’
// object need unit tests.
// beforeEach(() => {
//   const ship2 = new index.Ship(2);
// });
const ship2 = new index.Ship(2);
test("Ship Class", () => {
  expect(ship2).toEqual({ shipLength: 2, hits: 0, isSunk: false });
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
