const pomodoro = 25;
const short = 5;
const long = 10;

document.addEventListener("DOMContentLoaded", function() {
    
    const startingMinutes = 10;
    let time = startingMinutes * 60;
    let timerInterval;

    const countdown = document.getElementById('countdown');
    const pomodoroB = document.getElementById('pomodoro');
    pomodoroB.addEventListener('click', startPomodoro);

    function startPomodoro() {
        clearInterval(timerInterval);
        timerInterval = setInterval(updateCountdown, 1000);
    }

    function updateCountdown() {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds: seconds;
        countdown.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }
});