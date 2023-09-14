document.addEventListener("DOMContentLoaded", function() {
    
    //const startingMinutes = 10;
    //let time = startingMinutes * 60; //gets seconds
    const pomodoro = 25;
    const pomodoros = pomodoro * 60;
    const short = 1;
    const shorts = short * 60;
    const long = 10;
    const longs = long * 60;
    let timerInterval; //interval ID
    let timeLeft = 0;
    let elapsedTime = 0;

    const countdown = document.getElementById('countdown');
    
    //pomodoro button timer
    const pomodoroB = document.getElementById('pomodoro');
    pomodoroB.addEventListener('click', startPomodoro);
    function startPomodoro() {
        clearInterval(timerInterval);
        timeLeft = pomodoros;
        timerInterval = setInterval(function() {
            updateCountdown(timeLeft);
            timeLeft--;
            elapsedTime++;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
    }

    //short break button timer
    const shortB = document.getElementById('short');
    shortB.addEventListener('click', startShort);
    function startShort() {
        clearInterval(timerInterval);
        timeLeft = shorts;
        timerInterval = setInterval(function() {
            updateCountdown(timeLeft);
            timeLeft--;
            elapsedTime++;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
    }

    //long break button timer
    const longB = document.getElementById('long');
    longB.addEventListener('click', startLong);
    function startLong() {
        clearInterval(timerInterval);
        timeLeft = longs;
        timerInterval = setInterval(function() {
            updateCountdown(timeLeft);
            timeLeft--;
            elapsedTime++;
            if (timeLeft < 0) {
                clearInterval(timerInterval);
            }
        }
        , 1000);
    }

    function updateCountdown(time) {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds: seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        //time--;
    }

    //pause
    const pause = document.getElementById('pauseB');
    pause.addEventListener('click', pauseTime)
    
    function pauseTime() {
        clearInterval(timerInterval);
    }

    //play
    const resume = document.getElementById('resumeB');
    resume.addEventListener('click', resumeTime)

    function resumeTime() {
        timerInterval = setInterval(function() {
            updateCountdown(timeLeft);
            timeLeft--;
        }
        , 1000);
    }
    
    //reset
    const reset = document.getElementById('resetB');




});

