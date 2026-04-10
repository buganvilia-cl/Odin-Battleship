import {Gameboard, Ship, Player, ComputerPlayer}  from "./Battleship.js";

let Board= new Gameboard;

Board.placeShip(3,"v", [2,1]);

Board.receiveAttack([3,3])
Board.receiveAttack([2,1])
Board.logDisplay();

console.log(Board.squares[2][1][0]);
/*test('Ship placement', () => {
  expect(list.toString()).toBe("( 1 ) -> null");
}); */

console.log( )