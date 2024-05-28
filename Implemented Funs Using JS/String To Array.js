// Implemented Function Will Convert String to Array
// s : The string that will be converted

//The First Way Using split method

function convertStringToArrayF(s) {
  let array = s.split("");
  for (let i = 0; i < s.length; i++) {
    console.log(`${i + 1} -> ${array[i]}`);
  }
}

//The Thired Way
function convertStringToArrayS(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    console.log(`${i + 1} -> ${result[i]}`);
  }
}

convertStringToArrayF("Abdelmagid");

convertStringToArrayS("Migo");
