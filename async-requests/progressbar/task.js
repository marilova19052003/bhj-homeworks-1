document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const progress = document.getElementById("progress");

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    // Обработчик изменения состояния загрузки
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progress.value = percentComplete;
      }
    });

    // Обработчик завершения загрузки
    xhr.onload = () => {
      if (xhr.status === 200) {
        alert("Файл успешно загружен!");
      } else {
        alert("Ошибка при загрузке файла: " + xhr.statusText);
      }
      progress.value = 0; // Сброс индикатора после завершения
    };

    // Установка метода и URL для запроса
    xhr.open("POST", form.action);
    xhr.send(formData);
  });
});
