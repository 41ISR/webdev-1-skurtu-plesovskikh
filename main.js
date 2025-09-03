const buttons = document.querySelectorAll('.button');

let currentExpression = ''; // Текущее выражение
const display = document.querySelector(".display");

// button в данном случае будет передаваться СОБЫТИЕ НАЖАТИЕ, где можно будет узнать кнопку по которой нажали через target и из которой можно будет доставать её значение
function handleButton(button) {
    const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+")

    // Обработка разных типов кнопок
    if (value === '=') {
       display.textContent=eval(display.textContent)
     } else if (value === 'AC') {
        display.textContent = ""
    } else {
      display.textContent+=value
    }
};


// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
    button.addEventListener('click', handleButton)
})