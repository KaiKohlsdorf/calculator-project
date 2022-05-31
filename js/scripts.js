function add(number1, number2){
  return number1 + number2;
  }
  
  let number1 = parseInt(prompt("Enter a number:"));
  
  let number2 = parseInt(prompt("Enter another number:"));
  
  alert(add(number1, number2));

function sub(number3, number4){
  return number3 - number4;
}

let number3 = parseInt(prompt("Enter a number you want to subtract"));

let number4 = parseInt(prompt("Enter a number to subtract from original"))

alert(sub(number3, number4));

function times(number5, number6) {
  return number5 * number6;
}

let number5 = parseInt(prompt("Enter a number you want to multiply"));

let number6 = parseInt(prompt("Enter a number to multiply from original"))

alert(times(number5, number6));

function divide(number7, number8) {
  return number7 / number8;
}

let number7 = parseInt(prompt("Enter a number you want to divide"));

let number8 = parseInt(prompt("Enter a number to divide from original"))

alert(divide(number7, number8));