// Implemented Function Will Repeat The String
// s : The string that will be repeated
// num :The number of repeating

function stringRepeat(s, num) {
  let result = "";
  while (num--) {
    result += s + " ";
  }
  return result;
}

console.log(stringRepeat("Migo", 5));
