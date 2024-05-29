// Implemented Functions Will To Get number From String

// Explane
//12hello  0*10+(49-48)=1
//12hello  1*10+(50-48)=12

function parseInteger(value) {
  let result = 0;
  for (let x of value) {
    if (x >= "0" && x <= 9) result = result * 10 + (x - "0");
    else break;
  }
  return result;
}
console.log(parseInteger("1258hello"));
