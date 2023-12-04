function decode(message) {
  const regexp = /\(([^()]+)\)/g;
  const replacer = (_match, pn) => Array.from(pn).reverse().join("");
  return message.replace(regexp, replacer).replace(regexp, replacer);
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
