document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');
    const tasksForm = document.getElementById('tasks__form');

    // Функция для создания новой задачи
    function createTask(title) {
        const task = document.createElement('div');
        task.classList.add('task');

        task.innerHTML = 
            <div class="task__title">${title}</div>
            <a href="#" class="task__remove">&times;</a>
        ;

        // Добавляем обработчик события для удаления задачи
        const removeButton = task.querySelector('.task__remove');
        removeButton.addEventListener('click', (event) => {
            event.preventDefault();
            tasksList.removeChild(task);
        });

        tasksList.appendChild(task);
    }

    // Обработка события отправки формы
    tasksForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const taskTitle = taskInput.value.trim();
        if (taskTitle) {
            createTask(taskTitle);
            taskInput.value = ''; // Очищаем поле ввода
        }
    });

    // Обработка нажатия клавиши Enter в поле ввода
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Предотвращаем отправку формы
            const taskTitle = taskInput.value.trim();
            if (taskTitle) {
                createTask(taskTitle);
                taskInput.value = ''; // Очищаем поле ввода
            }
        }
    });
});