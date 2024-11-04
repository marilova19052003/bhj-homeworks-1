document.addEventListener("DOMContentLoaded", () => {
  const itemsContainer = document.getElementById("items");
  const loader = document.getElementById("loader");

  // Функция для загрузки данных о курсе валют
  async function loadCurrencyRates() {
    try {
      // Показываем анимацию загрузки
      loader.classList.add("loader_active");

      // Отправляем GET-запрос
      const response = await fetch(
        "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
      );
      const data = await response.json();

      // Получаем объект Valute из ответа
      const valute = data.response.Valute;

      // Обрабатываем каждый курс валюты
      for (const key in valute) {
        if (valute.hasOwnProperty(key)) {
          const currency = valute[key];
          const itemDiv = document.createElement("div");
          itemDiv.className = "item";

          // Создаем элементы для кода и значения валюты
          const codeDiv = document.createElement("div");
          codeDiv.className = "item__code";
          codeDiv.textContent = currency.CharCode;

          const valueDiv = document.createElement("div");
          valueDiv.className = "item__value";
          valueDiv.textContent = currency.Value.toFixed(2); // Форматируем значение до 2 знаков после запятой

          const currencyDiv = document.createElement("div");
          currencyDiv.className = "item__currency";
          currencyDiv.textContent = "руб.";

          // Добавляем созданные элементы в контейнер
          itemDiv.appendChild(codeDiv);
          itemDiv.appendChild(valueDiv);
          itemDiv.appendChild(currencyDiv);
          itemsContainer.appendChild(itemDiv);
        }
      }
    } catch (error) {
      console.error("Ошибка при загрузке курса валют:", error);
    } finally {
      // Скрываем анимацию загрузки после завершения загрузки
      loader.classList.remove("loader_active");
    }
  }

  // Загружаем курсы валют при загрузке страницы
  loadCurrencyRates();
});
