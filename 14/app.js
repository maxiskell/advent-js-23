function maxGifts(houses) {
  let prev = 0;
  let prevPrev = 0;

  for (let i = 0; i < houses.length; ++i) {
    let tmp = Math.max(prev, prevPrev + houses[i]);
    prevPrev = prev;
    prev = tmp;
  }

  return prev;
}

const tests = [
  maxGifts([2, 4, 2]), // 4 (4)
  maxGifts([5, 1, 1, 5]), // 10 (5 + 5)
  maxGifts([4, 1, 1, 4, 2, 1]), // 9 (4 + 4 + 1)
  maxGifts([1, 3, 1, 3, 100]), // 103 (3 + 100)
];

console.log(tests);
