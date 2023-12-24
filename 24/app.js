function getStaircasePaths(steps, maxJump) {
  let result = [];
  let path = [];

  function jumpFrom(n) {
    if (n === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 1; i <= maxJump && i <= n; ++i) {
      path.push(i);
      jumpFrom(n - i);
      path.pop();
    }
  }

  jumpFrom(steps);

  return result;
}

const testCases = [
  {
    input: [2, 1],
    expected: [[1, 1]],
  },
  {
    input: [3, 3],
    expected: [[1, 1, 1], [1, 2], [2, 1], [3]],
  },
  {
    input: [5, 1],
    expected: [[1, 1, 1, 1, 1]],
  },
  {
    input: [5, 2],
    expected: [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2],
      [1, 1, 2, 1],
      [1, 2, 1, 1],
      [1, 2, 2],
      [2, 1, 1, 1],
      [2, 1, 2],
      [2, 2, 1],
    ],
  },
];

for (let testCase of testCases) {
  console.log(testCase.input);

  const result = getStaircasePaths(...testCase.input);

  if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
    console.log("PASS");
  } else {
    console.log(
      `FAIL - expected: ${JSON.stringify(
        testCase.expected,
      )}, got: ${JSON.stringify(result)}`,
    );
  }
}
