function findBalancedSegment(message) {
  let sum = 1;
  let longest = 0;
  let seen = new Map([[0, -1]]);

  let result = [];

  for (let i = 0; i < message.length; ++i) {
    sum += message[i] === 0 ? -1 : 1;

    if (!seen.has(sum)) {
      seen.set(sum, i);
    } else {
      let prev = seen.get(sum);

      if (i - prev > longest) {
        result = [prev + 1, i];
        longest = i - prev;
      }
    }
  }

  return result;
}

const tests = [
  findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]),
  //                         |________|
  // posición del segmento:    [2, 5]
  // más largo equilibrado
  // de 0s y 1s

  findBalancedSegment([1, 1, 0]),
  //                      |__|
  //                     [1, 2]

  findBalancedSegment([1, 1, 1]),
  // no hay segmentos equilibrados: []
];

console.log(tests);
