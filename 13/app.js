function calculateTime(deliveries) {
  const SEVEN_HOURS_IN_SECONDS = 3600 * 7;

  let result = "";
  let totalSeconds = 0;

  for (let delivery of deliveries) {
    let [hours, minutes, seconds] = delivery.split(":").map(Number);

    seconds += minutes * 60;
    seconds += hours * 3600;

    totalSeconds += seconds;
  }

  totalSeconds -= SEVEN_HOURS_IN_SECONDS;

  if (totalSeconds < 0) {
    result += "-";
  }

  totalSeconds = Math.abs(totalSeconds);

  const hrs = Math.trunc(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  totalSeconds %= 3600;

  const mins = Math.trunc(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  totalSeconds %= 60;

  result += `${hrs}:${mins}:${totalSeconds.toString().padStart(2, "0")}`;

  return result;
}

const tests = [
  calculateTime(["00:10:00", "01:00:00", "03:30:00"]), // '-02:20:00'
  calculateTime(["02:00:00", "05:00:00", "00:30:00"]), // '00:30:00'
  calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]), // '-05:29:00'
];

console.log(tests);
