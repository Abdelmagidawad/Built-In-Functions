// Implemented Function Will Reverse The String
// s : The string that will be reversed

//The First Way Using swap
function stringReverseF(s) {
  let array = s.split("");

  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }

  console.log(array.join(""));
}

//The Second Way Using Empty String
function stringReverseS(s) {
  let reversString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversString += s[i];
  }
  console.log(reversString);
}

//The Thired Way Using Array
function stringReverseD(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.unshift(s[i]);
  }
  console.log(result.join(""));
}

stringReverseF("Migo");

stringReverseS("Migo");

stringReverseD("Migo");
