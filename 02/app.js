function manufacture(gifts, materials) {
  const materialsArr = materials.split("");

  return gifts.filter(
    (gift) =>
      Array.from(new Set(gift.split("").concat(materialsArr))).length ===
      materialsArr.length,
  );
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
