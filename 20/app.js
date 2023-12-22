function distributeGifts(weights) {
  let result = weights.map((row) => Array(row.length).fill(0));

  for (let i = 0; i < weights.length; ++i) {
    for (let j = 0; j < weights[i].length; ++j) {
      let [up, down, left, right] = [
        weights[i - 1]?.[j] ?? 0,
        weights[i + 1]?.[j] ?? 0,
        weights[i]?.[j - 1] ?? 0,
        weights[i]?.[j + 1] ?? 0,
      ];

      let sum = (weights[i][j] ?? 0) + up + down + left + right;
      let count =
        Number(weights[i][j] !== null) +
        Number(up !== 0) +
        Number(down !== 0) +
        Number(left !== 0) +
        Number(right !== 0);

      result[i][j] = count > 0 ? Math.round(sum / count) : 0;
    }
  }

  return result;
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];

console.log(distributeGifts(input));
/*
[
  [5, 3, 3],
  [6, 5, 3],
  [7, 6, 4]
]
*/
