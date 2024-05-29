// Implemented Functions Will To check  Number Exist in Array

function inArray(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return true;
  }
  return false;
}

if (inArray([1, 2, 6, 8, 9], 8)) console.log("Yes target exist in array");
else console.log("No target exist in array");
