function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let optimized = [intervals[0]];

  for (let interval of intervals) {
    let latest = optimized[optimized.length - 1];

    if (interval[0] <= latest[1]) {
      optimized[optimized.length - 1][1] = Math.max(interval[1], latest[1]);
    } else {
      optimized.push(interval);
    }
  }

  return optimized;
}

const testCases = [
  {
    input: [
      [5, 8],
      [2, 7],
      [3, 4],
    ],
    expected: [[2, 8]],
  },
  {
    input: [
      [1, 3],
      [8, 10],
      [2, 6],
    ],
    expected: [
      [1, 6],
      [8, 10],
    ],
  },
  {
    input: [
      [3, 4],
      [1, 2],
      [5, 6],
    ],
    expected: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  },
];

for (let testCase of testCases) {
  console.log(
    JSON.stringify(optimizeIntervals(testCase.input)) ===
      JSON.stringify(testCase.expected)
      ? "PASS"
      : "FAIL",
  );
}
