function findNaughtyStep(original, modified) {
  let p = 0;

  while (p < original.length && p < modified.length) {
    if (original[p] !== modified[p]) {
      return modified.length < original.length ? original[p] : modified[p];
    }

    p++;
  }

  return modified[p] ?? "";
}

{
  const original = "abcd";
  const modified = "abcde";
  console.log(findNaughtyStep(original, modified)); // 'e'
}

{
  const original = "stepfor";
  const modified = "stepor";
  console.log(findNaughtyStep(original, modified)); // 'f'
}

{
  const original = "abcde";
  const modified = "abcde";
  console.log(findNaughtyStep(original, modified)); // ''
}

{
  const original = "xxxx";
  const modified = "xxoxx";
  console.log(findNaughtyStep(original, modified)); // 'o'
}
