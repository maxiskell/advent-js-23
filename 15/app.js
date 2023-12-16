function autonomousDrive(store, movements) {
  const dirs = new Map([
    ["R", [0, 1]],
    ["L", [0, -1]],
    ["U", [-1, 0]],
    ["D", [1, 0]],
  ]);

  let storeMap = store.map((row) => row.split(""));

  let robotPosition = [0, 0];
  for (let row = 0; row < store.length; ++row) {
    let col = store[row].indexOf("!");

    if (col !== -1) {
      robotPosition = [row, col];
      break;
    }
  }

  for (let movement of movements) {
    let dir = dirs.get(movement);
    let [currRow, currCol] = robotPosition;
    let [nextRow, nextCol] = [currRow + dir[0], currCol + dir[1]];

    if (storeMap[nextRow]?.[nextCol] === ".") {
      storeMap[currRow][currCol] = ".";
      storeMap[nextRow][nextCol] = "!";

      robotPosition = [nextRow, nextCol];
    }
  }

  return storeMap.map((row) => row.join(""));
}

const testCases = [
  {
    values: [
      ["..!....", "...*.*."],
      ["R", "R", "D", "L"],
    ],
    expected: [".......", "...*!*."],
  },
  {
    values: [["..!...."], ["R", "L"]],
    expected: ["..!...."],
  },
];
function main() {
  let pass = 0;
  let fail = 0;
  for (let testCase of testCases) {
    console.log("---");

    const result = autonomousDrive(...testCase.values);

    if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
      pass++;
      console.log(`${JSON.stringify(testCase.values)}\n✅ PASS`);
    } else {
      console.log(
        `${JSON.stringify(
          testCase.values,
        )}\n❌ FAIL - \nexpected:\n${JSON.stringify(
          testCase.expected,
          null,
          2,
        )}\ngot:\n${JSON.stringify(result, null, 2)}`,
      );
      fail++;
    }

    console.log(`\nPassed: ${pass} - Failed: ${fail}`);
  }
}

main();
