// Implemented Functions Will To Get Maximum and Minimum number

// Get Maximum Number
function getMaximumNumber(array) {
  let maxNum = 0;
  array.forEach((element) => {
    if (element > maxNum) maxNum = element;
  });
  return maxNum;
}

// Get Minimum Number
function getMinimumNumber(array) {
  let miniNum = array[0];
  array.forEach((element) => {
    if (element < miniNum) miniNum = element;
  });
  return miniNum;
}

let array = [100, 90, -100, 10, -200, 500];
console.log(`The Maximum Number = ${getMaximumNumber(array)}`);
console.log(`The Minimum Number = ${getMinimumNumber(array)}`);
