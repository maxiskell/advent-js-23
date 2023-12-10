function adjustLights(lights) {
  const colors = ["🟢", "🔴"];
  const count = lights.reduce(
    (acc, curr, idx) => acc + Number(curr === colors[idx % 2]),
    0,
  );

  return Math.min(count, lights.length - count);
}

const tests = [
  adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]),
  // -> 1 (cambias la cuarta luz a 🔴)

  adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]),
  // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

  adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]),
  // -> 0 (ya están alternadas)

  adjustLights(["🔴", "🔴", "🔴"]),
  // -> 1 (cambias la segunda luz a 🟢)

  adjustLights(["🔴"]),
  // -> 0 (ya están alternadas)

  adjustLights(["🔴", "🔴"]),
  // -> 1 (cambias la segunda luz a 🟢)

  adjustLights(["🟢", "🔴", "🟢", "🔴", "🔴"]),
  // -> 1 (cambias la quinta luz a 🟢)

  adjustLights([""]),
  // -> 0 (nada que hacer)

  adjustLights([]),
  // -> 0 (nada que hacer)
];

console.log(tests);
