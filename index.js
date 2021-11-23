const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  history: [],
  historyData: "",
  expressionData: ""
};

const keys = document.querySelector('.calculator__keys')

function updateDisplay() {
  // select the element with class of `result`
  const display = document.querySelector('.result');
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function

  if (target.matches('button')) {
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
      return;
    }

    if (target.classList.contains('decimal')) {
      inputDecimal(target.value)
      return;
    }

    if (target.classList.contains('clear')) {
      resetCalculator();
      updateDisplay();
      return;
    }
    inputDigit(target.value);
    updateDisplay();
  }
});

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

}

function inputDecimal(dot) {
  // If the `displayValue` property does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  // Destructure the properties on the calculator object
  const { firstOperand, displayValue, operator, waitingForSecondOperand } = calculator
  // `parseFloat` converts the string contents of `displayValue`
  // to a floating-point number
  const inputValue = parseFloat(displayValue);

  if (operator && waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  // verify that `firstOperand` is null and that the `inputValue`
  if (firstOperand === null) {
    // Update the firstOperand property
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = result;
    calculator.firstOperand = result;
    // Saving to history
    calculator.historyData = result;
    calculator.history.unshift({ expression: calculator.expressionData, result: calculator.historyData })
    showLogData()
    historyData = ""
    expressionData = ""
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  calculator.expressionData = firstOperand + " " + operator + " " + secondOperand
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

let history_div = document.querySelector(".history")

if (calculator.history.length === 0) {
  history_div.style.display = "none"
}

function showLogData() {
  let log = document.getElementById("history")
  let string = ""
  history_div.style.display = "block"
  if (calculator.history.length > 7) {
    calculator.history.shift()
  }

  for (let key in calculator.history) {
    if (calculator.history[key].expression) {
      string += `
      <div>
        <p class="history_operation">${calculator.history[key].expression}  </p>
        <p class="history_total"> ${calculator.history[key].result}</p>
      </div>
      `
    }
  }
  log.innerHTML = string
}