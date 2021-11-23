// const keys = document.querySelector('.calculator__keys')
// const display = document.querySelector('.result');
// let history = []
// let expressionData = ""
// let historyData = ""
// // let operator = ""

// keys.addEventListener('click', e => {
//   if (e.target.matches('button')) {
//     const clickedButtonValue = e.target.value;
//     const { target } = e
//     // console.log(target.classList.contains('operator'))

//     if (clickedButtonValue === '=') {
//       // check if the display is not empty then only do the calculation
//       if (display.value !== '') {
//         // calculate and show the answer to display
//         const result = display.value = eval(display.value);
//         historyData = result
//         history.push({ "expression": expressionData, "result": historyData })
//         showLogData()
//         historyData = ""
//         expressionData = ""
//       }
//     } else if (clickedButtonValue === 'AC') {
//       // clear everything on display
//       display.value = '';
//     } else {
//       // otherwise concatenate it to the display
//       const new_input = display.value += clickedButtonValue;
//       expressionData = new_input
//     }
//   }
// })


// function showLogData() {
//   let log = document.getElementById("history")
//   let string = ""
//   for (let key in history) {
//     if (history[key].expression) {
//       console.log(history[key].expression)
//       string += `
//       <div>
//       <p class="history_operation">${history[key].expression}  </p>
//       <p class="history_total"> ${history[key].result}</p>
//       </div>
//       `
//     }
//   }
//   log.innerHTML = string
// }
