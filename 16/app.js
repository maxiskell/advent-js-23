function transformTree(tree) {
  function dfs(n) {
    if (tree[n] === undefined || tree[n] === null) {
      return null;
    }

    return {
      value: tree[n],
      left: dfs(2 * n + 1),
      right: dfs(2 * n + 2),
    };
  }

  const result = dfs(0);

  return result;
}

const testCase = {
  input: [3, 1, 0, 8, 12, null, 1],
  expected: {
    value: 3,
    left: {
      value: 1,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 12,
        left: null,
        right: null,
      },
    },
    right: {
      value: 0,
      left: null,
      right: {
        value: 1,
        left: null,
        right: null,
      },
    },
  },
};

console.log(JSON.stringify(transformTree(testCase.input), null, 2));
console.log(
  JSON.stringify(transformTree(testCase.input)) ===
    JSON.stringify(testCase.expected)
    ? "PASS"
    : "FAIL",
);
