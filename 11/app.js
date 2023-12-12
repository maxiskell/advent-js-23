function getIndexsForPalindrome(word) {
  if (word === [...word].reverse().join("")) {
    return [];
  }

  for (let i = 0; i < word.length; ++i) {
    for (let j = i + 1; j < word.length; ++j) {
      let swapped = [...word];
      let aux = swapped[i];
      swapped[i] = swapped[j];
      swapped[j] = aux;

      if (swapped.join("") === swapped.reverse().join("")) {
        return [i, j];
      }
    }
  }

  return null;
}

const tests = [
  getIndexsForPalindrome("anna"), // []
  getIndexsForPalindrome("abab"), // [0, 1]
  getIndexsForPalindrome("abac"), // null
  getIndexsForPalindrome("aaaaaaaa"), // []
  getIndexsForPalindrome("aaababa"), // [1, 3]
  getIndexsForPalindrome("caababa"), // null
];

tests.map((result) => console.log(result));
