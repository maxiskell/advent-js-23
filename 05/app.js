function cyberReindeer(road, time) {
  let pos = 0;
  let prev = ".";
  let result = [road];

  for (let i = 1; i < time; i++) {
    if (i === 5) {
      road = road.replaceAll("|", "*");
    }

    switch (road[pos + 1]) {
      case ".":
        road = road.substring(0, pos) + `${prev}S` + road.substring(pos + 2);
        prev = ".";
        pos++;
        break;
      case "*":
        road = road.substring(0, pos) + `${prev}S` + road.substring(pos + 2);
        prev = "*";
        pos++;
        break;
      case "|":
        break;
    }

    result.push(road);
  }

  return result;
}

const road = "S..|...|..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
