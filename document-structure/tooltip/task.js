document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');
    document.body.appendChild(tooltipElement);

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', (event) => {
            event.preventDefault();

            // Получаем текст подсказки из атрибута title
            const tooltipText = tooltip.getAttribute('title');
            tooltipElement.textContent = tooltipText;

            // Позиционирование подсказки
            const rect = tooltip.getBoundingClientRect();
            tooltipElement.style.left = ${rect.left + window.scrollX}px;
            tooltipElement.style.top = ${rect.bottom + window.scrollY}px;

            // Показываем или скрываем подсказку
            if (tooltipElement.classList.contains('tooltip_active')) {
                tooltipElement.classList.remove('tooltip_active');
            } else {
                tooltipElement.classList.add('tooltip_active');
            }
        });
    });

    // Закрытие подсказки при клике вне ее
    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('has-tooltip')) {
            tooltipElement.classList.remove('tooltip_active');
        }
    });
});