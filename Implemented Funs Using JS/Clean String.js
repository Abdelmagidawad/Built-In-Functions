// Implemented Functions Will clean a string from digits or symbols and to get string of character only

function cleanString(value) {
  let result = "";
  for (char of value) {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))
      result += char;
  }
  return result;
}

console.log(`The String Cleaned = ${cleanString("migo125//@Mig")}`);
