function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) {
    return false;
  }

  const degradationChain = ["#", "+", ":", ".", " "];

  let originalChar = "";
  let copyChar = "";

  for (let i = 0; i < original.length; ++i) {
    originalChar = original[i];
    copyChar = copy[i];

    if (originalChar === copyChar) {
      continue;
    }

    if (
      degradationChain.indexOf(copyChar) <
      degradationChain.indexOf(originalChar)
    ) {
      return false;
    }

    if (copyChar.match(/[a-z]/) && originalChar.toLowerCase() !== copyChar) {
      return false;
    }

    if (copyChar.match(/[A-Z]/) && originalChar.match(/[a-z]/)) {
      return false;
    }

    if (copyChar === "#" && originalChar.match(/[^a-zA-Z]/)) {
      return false;
    }
  }

  return true;
}

const testCases = [
  {
    values: ["Santa Claus is coming", "sa#ta Cl#us i+ comin#"],
    expected: true,
  },
  {
    values: ["s#nta Cla#s is coming", "p#nt: cla#s #s c+min#"],
    expected: false, // (la p inicial)
  },
  {
    values: ["Santa Claus", "s#+:. c:. s"],
    expected: true,
  },
  {
    values: ["Santa Claus", "s#+:.#c:. s"],
    expected: false, //(hay un # donde no debería)
  },
  {
    values: ["s+#:.#c:. s", "s#+:.#c:. s"],
    expected: false,
  },
  {
    values: ["S#nta Claus", "S#ntA ClauS"],
    expected: false,
  },
  {
    values: ["3 #egalos", "3 .+:# #:"],
    expected: true,
  },
  {
    values: ["Santa Claus", "###:. c:+##"],
    expected: true,
  },
];

function main() {
  let pass = 0;
  let fail = 0;
  for (let testCase of testCases) {
    console.log("---");

    const result = checkIsValidCopy(...testCase.values);

    if (result === testCase.expected) {
      pass++;
      console.log(`${testCase.values}\n✅ PASS - "${result}"`);
    } else {
      console.log(
        `${testCase.values}\n❌ FAIL - expected "${testCase.expected}", got "${result}"`,
      );
      fail++;
    }

    console.log(`\nPassed: ${pass} - Failed: ${fail}`);
  }
}

main();
