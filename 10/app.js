function createChristmasTree(ornaments, height) {
  let result = "";
  let pos = 0;

  for (let level = 0; level < height; ++level) {
    let levelChars = [];
    result += " ".repeat(height - level - 1);

    for (let j = 0; j <= level; ++j) {
      levelChars.push(ornaments[pos]);
      pos = pos === ornaments.length - 1 ? 0 : pos + 1;
    }

    result += `${levelChars.join(" ")}\n`;
  }

  result += " ".repeat(height - 1) + "|\n";

  return result;
}

const tests = [
  [
    ["123", 4],
    `   1
  2 3
 1 2 3
1 2 3 1
   |
`,
  ],
  [
    ["*@o", 3],
    `  *
 @ o
* @ o
  |
`,
  ],
];

for (let [given, expected] of tests) {
  console.log(
    createChristmasTree(...given) === expected
      ? `✅ PASS ${given}`
      : `❌ FAIL ${given}`,
  );
}
