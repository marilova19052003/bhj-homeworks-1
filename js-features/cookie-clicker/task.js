const cookie = document.getElementById('cookie');
const counterDisplay = document.getElementById('clicker__counter');

// Инициализируем счётчик кликов
let counter = 0;

// Обработчик события клика по печенью
cookie.onclick = function() {
    counter++; // Увеличиваем счётчик
    counterDisplay.textContent = counter; // Обновляем отображение счётчика

    // Чередуем размеры печенья
    if (counter % 2 === 0) {
        cookie.width = 220; // Увеличиваем ширину
        cookie.height = 220; // Увеличиваем высоту
    } else {
        cookie.width = 200; // Уменьшаем ширину
        cookie.height = 200; // Уменьшаем высоту
    }
};