function drawGift(size, symbol) {
  if (size < 2) {
    return "#\n";
  }

  let fill = symbol.repeat(size - 2);

  let lines = [" ".repeat(size - 1) + "#".repeat(size) + "\n"];
  for (let line = 2; line < size; ++line) {
    lines.push(
      " ".repeat(size - line) + `#${fill}#` + symbol.repeat(line - 2) + "#\n",
    );
  }

  return [
    ...lines,
    "#".repeat(size) + `${fill}#\n`,
    ...lines.map((line) => line.replace(/^\s+/g, "")).reverse(),
  ].join("");
}

console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, "^"));
/*
#
*/
