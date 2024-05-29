// Implemented Function Will Calculate length of String
// s : The string

//The First Way Using foreach
function getStringLengthWay1(s) {
  let count = 0;
  [...s].forEach((element) => {
    count++;
  });
  console.log(count);
}

//The Second Way Using while loop
function getStringLengthWay2(s) {
  let count = 0;
  while (s[count] !== undefined) {
    count++;
  }
  console.log(count);
}

getStringLengthWay1("Mody");
getStringLengthWay2("Hello");
