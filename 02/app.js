function manufacture(gifts, materials) {
  let result = [];

  for (let gift of gifts) {
    let i = 0;

    while (i < gift.length && materials.includes(gift.charAt(i))) {
      i++;
    }

    if (i === gift.length) {
      result.push(gift);
    }
  }

  return result;
}

{
  const gifts = ["tren", "oso", "pelota"];
  const materials = "tronesa";

  console.log(manufacture(gifts, materials)); // ["tren", "oso"]
  // 'tren' SÍ porque sus letras están en 'tronesa'
  // 'oso' SÍ porque sus letras están en 'tronesa'
  // 'pelota' NO porque sus letras NO están en 'tronesa'
}
{
  const gifts = ["juego", "puzzle"];
  const materials = "jlepuz";

  console.log(manufacture(gifts, materials)); // ["puzzle"]
}

{
  const gifts = ["libro", "ps5"];
  const materials = "psli";

  console.log(manufacture(gifts, materials)); // []
}
