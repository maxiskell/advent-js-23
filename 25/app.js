function travelDistance(map) {
  function distance(p, q) {
    return Math.abs(p[0] - q[0]) + Math.abs(p[1] - q[1]);
  }

  let totalDistance = 0;
  let rows = map.split("\n");
  let positions = [];

  for (let i = 0; i < rows.length; ++i) {
    for (let j = 0; j < rows[i].length; ++j) {
      if (rows[i][j] === ".") {
        continue;
      }

      let cell = rows[i][j];

      if (cell === "S") {
        positions[0] = [i, j];
      } else {
        positions[Number(cell)] = [i, j];
      }
    }
  }

  for (let i = 0; i < positions.length - 1; ++i) {
    totalDistance += distance(positions[i], positions[i + 1]);
  }

  return totalDistance;
}

const map = `.....1....
..S.......
..........
....3.....
......2...`;

const result = travelDistance(map);
console.log(result); // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`);
console.log(result2); // -> 2
