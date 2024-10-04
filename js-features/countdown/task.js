let seconds = parseInt(document.getElementById('timer').textContent);
        const timerElement = document.getElementById('timer');

        const countdown = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                timerElement.textContent = seconds; 
            } else {
                clearInterval(countdown); 
                alert('Вы победили в конкурсе!'); 
            }
        }, 1000); 