function organizeChristmasDinner(dishes) {
  let result = [];

  const ingredients = [
    ...new Set(dishes.flatMap((dish) => dish.slice(1))),
  ].sort();

  for (let ingredient of ingredients) {
    let dishesWithIngredient = dishes.filter((dish) =>
      dish.includes(ingredient),
    );

    if (dishesWithIngredient.length > 1) {
      result.push([
        ingredient,
        ...dishesWithIngredient.map((dish) => dish[0]).sort(),
      ]);
    }
  }

  return result;
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));

/*

"sauce" está en 2 platos: "christmas turkey" y "pizza".
"sugar" está en 2 platos: "cake" y "hot chocolate".
El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
Y los platos de cada ingrediente también están ordenados alfabéticamente.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/
