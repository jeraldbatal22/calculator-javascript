function shuffle(array) {
  let randomIndex = ""
  let currentIndex = array.length;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const numbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
const bodyNumber = document.querySelector('.numbers');

let body = "";
bodyNumber.innerHTML = body
for (let i = 0; i < numbers.length; i++) {
  if (i === 0) {
    body += `<button value="AC" class="button resetBtn clear" style="color: #1877F2; " data-action="clear">AC</button>`
  }
  if (i === 0) {
    body += `<button value="+" class="button negative_operator" style="color:#fff; cursor:default" disabled>+/-</button>`
    body += `<button value="%" class="button operator percent" style="color:#fff; cursor:default" disabled>%</button>`
    body += `<button value="/" class="button operator_divide operator" data-action="divide">/</button>`
  }
  if (i === 3) {
    body += `<button value="*" class="button operator" data-action="multiply">*</button>`
  }
  if (i === 6) {
    body += `<button value="-" class="button operator_minus operator" data-action="subtract">-</button>`
  }
  if (i === 9) {
    body += `<button value="+" class="button operator_plus operator" data-action="add">+</button>`
    body += `<button value="=" class="button operator_plus operator" data-action="calculate">=</button>`
    body += `<button value="." class="button operator_plus decimal" data-action="decimal">.</button>`
  }

  body += `<button value="${numbers[i]}" class="button number">${numbers[i]}</button>`
}

bodyNumber.innerHTML = body
