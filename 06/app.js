function maxDistance(movements) {
  let movesRight = 0;
  let movesLeft = 0;
  let rest = 0;

  for (let i = 0; i < movements.length; ++i) {
    if (movements[i] === ">") {
      movesRight += 1;
    } else if (movements[i] === "<") {
      movesLeft += 1;
    } else {
      rest += 1;
    }
  }

  return Math.abs(movesRight - movesLeft) + rest;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
