// Implemented Function Will Repeat The String
// value : The string that will be repeated
// repeatNum :The number of repeating

function stringRepeat(value, repeatNum) {
  let result = "";
  while (repeatNum--) {
    if (repeatNum === 0) result += value;
    else result += value + " ";
  }
  return result;
}

console.log(stringRepeat("Migo", 5));
