let display = document.getElementById("display");
let currentValue = "";
let operator = "";
let firstValue = "";

function updateDisplay() {
  if (operator !== "" && firstValue !== "") {
    display.value = `${firstValue} ${operator} ${currentValue}`;
  } else {
    display.value = currentValue;
  }
}

function appendToDisplay(value) {
  currentValue += value;
  updateDisplay();
}

function operate(op) {
  if (firstValue === "") {
    firstValue = currentValue;
    operator = op;
    currentValue = "";
  } else {
    calculate();
    operator = op;
  }
  updateDisplay();
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(firstValue) + parseFloat(currentValue);
      break;
    case "-":
      result = parseFloat(firstValue) - parseFloat(currentValue);
      break;
    case "*":
      result = parseFloat(firstValue) * parseFloat(currentValue);
      break;
    case "/":
      result = parseFloat(firstValue) / parseFloat(currentValue);
      break;
  }
  display.value = result;
  currentValue = result;
  firstValue = "";
  operator = "";
}

function clearDisplay() {
  currentValue = "";
  firstValue = "";
  operator = "";
  display.value = "";
}

updateDisplay();
