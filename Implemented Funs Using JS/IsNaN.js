// Implemented Functions Will To test Not A Number Yes or No
// Is Not A Number => isNaN=>"12AE25"

function isNaN(value) {
  for (char of value) {
    if (char < "0" || char > "9") return true;
  }
  return false;
}

if (isNaN("15Migo47")) console.log("Yes Is Not A Number");
else console.log("No Is Not A Number");
