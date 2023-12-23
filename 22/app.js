function compile(code) {
  let instructions = [...code];
  let counter = 0;

  let pos = 0;
  let markers = [];

  while (pos < instructions.length) {
    switch (instructions[pos]) {
      case "+":
        counter += 1;
        pos++;
        break;
      case "*":
        counter *= 2;
        pos++;
        break;
      case "-":
        counter -= 1;
        pos++;
        break;
      case "%":
        markers.push(++pos);
        break;
      case "<":
        instructions[pos] = " ";
        pos = markers.pop() ?? pos + 1;
        break;
      case "¿":
        if (counter <= 0) {
          pos = instructions.indexOf("?", pos + 1);
        } else {
          pos++;
        }
        break;
      default:
        pos++;
        break;
    }
  }

  return counter;
}

const testCases = [
  {
    input: "++*-",
    expected: 3, // (1 + 1) * 2 - 1 = 3
  },
  {
    input: "++%++<",
    expected: 6, // 1 + 1 + 1 + 1 + 1 + 1 = 6
  },
  {
    input: "++<--",
    expected: 0, // 1 + 1 - 1 - 1 = 0
  },
  {
    input: "++¿+?",
    expected: 3, // 1 + 1 + 1 = 3
  },
  {
    input: "--¿+++?",
    expected: -2, // - 1 - 1 = -2
  },
  {
    input: "--¿+++?+++¿--?",
    expected: -1,
  },
  {
    input: "<%+¿++%++<?",
    expected: 7,
  },
];

for (let testCase of testCases) {
  console.log(testCase.input);

  const result = compile(testCase.input);

  if (result === testCase.expected) {
    console.log("PASS");
  } else {
    console.log(`FAIL - expected: ${testCase.expected}, got: ${result}`);
  }
}
