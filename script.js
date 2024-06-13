let set_defultBtn = document.querySelector('.defult-timer-button');
let set_longBreakBtn = document.querySelector('.long-break-button');
let set_shortBreakBtn = document.querySelector('.short-break-button');
let timerMinute = document.querySelector('.showing-time-minute');
let timerSecond = document.querySelector('.showing-time-second');
let startPauseBtn = document.querySelector('.start-pause-button');
let reSetBtn = document.querySelector('.reset-button');

let alarm_Sound = new Audio("alarm1.mp3");
let timer;
let isPaused = true;
let timeRemaining = 25 * 60; //for the default 25 minutes when the page loads

// for the pomodoro 25 minutes button
set_defultBtn.addEventListener('click', () => {
    clearInterval(timer);
    timeRemaining = 25 * 60;
    updateDisplay();
    isPaused = true;
    startPauseBtn.innerHTML = "Start";
});

// for the longbreak 15 minutes button
set_longBreakBtn.addEventListener('click', () => {
    clearInterval(timer);
    timeRemaining = 15 * 60;
    updateDisplay();
    isPaused = true;
    startPauseBtn.innerHTML = "Start";
});

// for the shortbreak 5 minutes button
set_shortBreakBtn.addEventListener('click', () => {
    clearInterval(timer);
    timeRemaining = 5 * 60;
    updateDisplay();
    isPaused = true;
    startPauseBtn.innerHTML = "Start";
});

// for the start and pause toggle button
startPauseBtn.addEventListener('click', () => {
    if (isPaused) {
        startPauseBtn.innerHTML = "Pause";
        timer = setInterval(updateCountdown, 1000);
    } else {
        startPauseBtn.innerHTML = "Start";
        clearInterval(timer);
    }
    isPaused = !isPaused;
});

// for the reset button
reSetBtn.addEventListener('click', () => {
    clearInterval(timer);
    timeRemaining = 25 * 60;
    updateDisplay();
    isPaused = true;
    startPauseBtn.innerHTML = "Start";
});

// function to decrease the counter
function updateCountdown() {
    if (timeRemaining <= 0) {
        clearInterval(timer);
        alarm_Sound.play();
        // timeRemaining = 25 * 60;
        startPauseBtn.innerHTML = "Start";
        return;
    }
    timeRemaining--;
    updateDisplay();
}

// function to display the counter
function updateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    timerMinute.innerHTML = `${minutes < 10 ? '0' : ''}${minutes}`;
    timerSecond.innerHTML = `${seconds < 10 ? '0' : ''}${seconds}`;
}
updateDisplay();

