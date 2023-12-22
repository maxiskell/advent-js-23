function revealSabotage(store) {
  let result = [...store];

  for (let i = 0; i < store.length; ++i) {
    for (let j = 0; j < store[i].length; ++j) {
      if (store[i][j] === "*") {
        continue;
      }

      let count =
        Number(i > 0 && j > 0 && store[i - 1][j - 1] === "*") +
        Number(i > 0 && store[i - 1][j] === "*") +
        Number(
          i > 0 && j < store[i].length - 1 && store[i - 1][j + 1] === "*",
        ) +
        Number(j > 0 && store[i][j - 1] === "*") +
        Number(j < store[i].length - 1 && store[i][j + 1] === "*") +
        Number(i < store.length - 1 && j > 0 && store[i + 1][j - 1] === "*") +
        Number(i < store.length - 1 && store[i + 1][j] === "*") +
        Number(
          i < store.length - 1 &&
            j < store[i].length - 1 &&
            store[i + 1][j + 1] === "*",
        );

      result[i][j] = `${count > 0 ? count : " "}`;
    }
  }

  return result;
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
