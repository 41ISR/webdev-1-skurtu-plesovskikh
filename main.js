const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");

let currentExpression = ''; // Текущее выражение


// button в данном случае будет передаваться СОБЫТИЕ НАЖАТИЕ, где можно будет узнать кнопку по которой нажали через target и из которой можно будет доставать её значение
function handleButton(button) {
  const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+") 


  // Обработка разных типов кнопок
  if (value === '=') {
    if (display.textContent.includes("%")) {
      const numbers = display.textContent.split("%")
      display.textContent = eval(numbers[0] / 100) * numbers[1]
    } else {
      display.textContent = eval(display.textContent.replaceAll("×", "*").replaceAll("÷", "/"))
    }
  } else if (value === 'AC') {
    display.textContent = " 0"
  } else if (value === '%') {
    display.textContent = `${eval(display.textContent)}%`
  } else if (value === "+/-") {
    display.textContent = eval(display.textContent.replaceAll("×", "*").replaceAll("÷", "/"))
    display.textContent = eval(display.textContent * -1)
  } else {
    if (display.textContent == " 0") {
      display.textContent = value
    }else {

      display.textContent += value
    }
  }
};


// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
  button.addEventListener('click', handleButton)
})