//* 0
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1') 
const input2 = document.getElementById('input2') 
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multBtn = document.getElementById('mult')
const divideBtn = document.getElementById('divide')
let action = '+' // по умолчанию переменная +

console.log(resultElement.textContent) // 37 - в резалтэлементе контент такой

plusBtn.onclick = function () {
   action = '+';
}

minusBtn.onclick = function () {
   action = '-';
}

multBtn.onclick = function () {
   action = '*';
}

divideBtn.onclick = function () {
   action = '/';
}


//* 2 выносим логику по изменени цветов в отдельную функцию
function printResult(result) {
   if(result < 0) {
      resultElement.style.color = 'red'
   } else {
      resultElement.style.color = 'green'
   }
   resultElement.textContent = result;
}
//* 3 выносим логику по вычислению числа в зависимости от оператора в отдельную функцию:
function computeNumbersWithAction(inp1, inp2, actionSymbol) {
      const num1 =Number(inp1.value)
      const num2 =Number(inp2.value)
      //* если только + и -
      // return actionSymbol == '+' ? num1 + num2 : num1 - num2;
      //* есди все операторы:
         if(actionSymbol == '+') {
             return num1 + num2
         } else if (actionSymbol == '-') {
             return num1 - num2;
         } else if (actionSymbol == '*') {
            return num1 * num2;
         } else if (actionSymbol == '/') {
            return num1 / num2;
         } else {
            return 0;
         }  
}

//* 1
submitBtn.onclick = function () {  
   const result = computeNumbersWithAction(input1, input2, action)
   printResult(result);
}


