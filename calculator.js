let firstNum = document.getElementById("num1");
let secondNum = document.getElementById("num2");
/*  Create a function that multiplies two numbers
  passed in as arguments. Return the product. */
function mult() {
    var a = parseInt(firstNum.value);
    var b = parseInt(secondNum.value);
    var dih = a * b;
    let resultDiv = document.getElementById("result");    
    resultDiv.innerHTML = dih;
}

/*  Create a function that adds two numbers
  passed in as arguments. Return the sum. */
function add() {
    var a = parseInt(firstNum.value);
    var b = parseInt(secondNum.value);
    var sum = a + b;
    let resultDiv = document.getElementById("result");    
    resultDiv.innerHTML = sum;
}

/*Create a function that subtracts two numbers
  passed in as arguments. Return the difference. */
function subt() {
    var a = parseInt(firstNum.value);
    var b = parseInt(secondNum.value);
    var nah = a - b;
    let resultDiv = document.getElementById("result");    
    resultDiv.innerHTML = nah;
}

/*  Create a function that divides two numbers
  passed in as arguments. Return the quotient. */
function divide() {
    var a = parseInt(firstNum.value);
    var b = parseInt(secondNum.value);
    var divi = a / b;
    let resultDiv = document.getElementById("result");    
    resultDiv.innerHTML = divi.toFixed(1);
}

/*  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation. */


/*
    Event Listeners

*/
const multB = document.getElementById("multB");
const addB = document.getElementById("addB");
const subtB = document.getElementById("subtB");
const divideB = document.getElementById("divideB");

multB.addEventListener("click", mult);
addB.addEventListener("click", add);
subtB.addEventListener("click", subt);
divideB.addEventListener("click", divide);

