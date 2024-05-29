// Implemented Function Will Convert String to Array
// s : The string that will be converted

//The First Way Using split method

function convertStringToArrayWay1(s) {
  let array = s.split("");
  for (let i = 0; i < s.length; i++) {
    console.log(`${i + 1} -> ${array[i]}`);
  }
}

//The Thired Way
function convertStringToArrayWay2(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    console.log(`${i + 1} -> ${result[i]}`);
  }
}

convertStringToArrayWay1("Abdelmagid");

convertStringToArrayWay2("Migo");
