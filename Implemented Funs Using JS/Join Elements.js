// Implemented Function to Join Elements Array

function Join(array, separator) {
  let result = "";
  array.forEach((element, index) => {
    if (array[index] !== array.length - 1) result += element + separator;
    else result += element;
  });
  return result;
}

console.log(Join(["Ali", "Osama", "omar"], ""));
console.log(Join(["Ali", "Osama", "omar"], "|"));
