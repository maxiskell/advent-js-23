function organizeGifts(gifts) {
  let chars = gifts.match(/[a-z]/gi);
  let counts = gifts.match(/\d+/g).map(Number);

  let result = "";
  let char, count;

  for (let i in chars) {
    char = chars[i];
    count = counts[i];

    result += `[${char}]`.repeat(count / 50);
    count %= 50;

    result += `{${char}}`.repeat(count / 10);
    count %= 10;

    result += `(${char.repeat(count)})`.repeat(!!count);
  }

  return result;
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:
  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos,
       resultando en 1 palé [a] (por las primeras 5 cajas),
       2 cajas sueltas {a}{a} y
       una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo,
       resultando en 1 caja suelta {b} y
       una bolsa con 1 regalo (b)
*/
