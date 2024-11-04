document.addEventListener("DOMContentLoaded", () => {
  const pollTitle = document.getElementById("poll__title");
  const pollAnswers = document.getElementById("poll__answers");

  // Функция для загрузки опроса
  async function loadPoll() {
    try {
      const response = await fetch(
        "https://students.netoservices.ru/nestjs-backend/poll"
      );
      const data = await response.json();

      // Устанавливаем заголовок опроса
      pollTitle.textContent = data.data.title;

      // Создаем кнопки для ответов
      data.data.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.className = "poll__answer";
        button.textContent = answer;

        // Обработчик клика по кнопке
        button.addEventListener("click", () => {
          alert("Спасибо, ваш голос засчитан!");
        });

        pollAnswers.appendChild(button);
      });
    } catch (error) {
      console.error("Ошибка при загрузке опроса:", error);
    }
  }

  // Загружаем опрос при загрузке страницы
  loadPoll();
});
