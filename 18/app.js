function drawClock(time) {
  const digits = [
    ["***", "* *", "* *", "* *", "* *", "* *", "***"],
    ["  *", "  *", "  *", "  *", "  *", "  *", "  *"],
    ["***", "  *", "  *", "***", "*  ", "*  ", "***"],
    ["***", "  *", "  *", "***", "  *", "  *", "***"],
    ["* *", "* *", "* *", "***", "  *", "  *", "  *"],
    ["***", "*  ", "*  ", "***", "  *", "  *", "***"],
    ["***", "*  ", "*  ", "***", "* *", "* *", "***"],
    ["***", "  *", "  *", "  *", "  *", "  *", "  *"],
    ["***", "* *", "* *", "***", "* *", "* *", "***"],
    ["***", "* *", "* *", "***", "  *", "  *", "***"],
  ];

  const separator = [" ", " ", "*", " ", "*", " ", " "];

  const [hours, minutes] = time.split(":");

  const [h0, h1] = [digits[Number(hours[0])], digits[Number(hours[1])]];
  const [m0, m1] = [digits[Number(minutes[0])], digits[Number(minutes[1])]];

  let clock = [];

  for (let i = 0; i < 7; ++i) {
    clock.push(`${h0[i]} ${h1[i]} ${separator[i]} ${m0[i]} ${m1[i]}`.split(""));
  }

  return clock;
}
