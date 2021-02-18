const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

const container = document.querySelector(".container");

function inputNumber(number) {
  const displayValue = calculator.displayValue;
  const waitingForSecondOperand = calculator.waitingForSecondOperand;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = number;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === `0` ? number : displayValue + number;
    console.log(calculator);
  }
}

function handleOperator(nextOperator) {
  const firstOperand = calculator.firstOperand,
    displayValue = calculator.displayValue,
    operator = calculator.operator;

  const inputValue = parseInt(displayValue, 10);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator);
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }
  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
  if (operator === `+`) {
    return firstOperand + secondOperand;
  } else if (operator === `-`) {
    return firstOperand - secondOperand;
  } else if (operator === `*`) {
    return firstOperand * secondOperand;
  } else if (operator === `/`) {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function clear() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

function updateScreen() {
  const screen = document.querySelector(".screen");
  screen.value = calculator.displayValue;
}
updateScreen();

container.addEventListener("click", clickWhat);

function clickWhat(e) {
  const target = e.target;
  if (!target.matches(`button`)) {
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateScreen();
    return;
  }
  if (target.classList.contains(`clear`)) {
    clear();
    updateScreen();
    return;
  }

  inputNumber(target.value);
  updateScreen();
}
