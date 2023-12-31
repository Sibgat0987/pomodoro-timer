
const pomodoroEl = document.getElementById("pomodoro-timer-el");
const startEl = document.getElementById("start-el");
const stopEl = document.getElementById("stop-el");
const pauseEl = document.getElementById("pause-el");
const resetEl = document.getElementById("reset-el");
const shortBreak = document.getElementsByClassName("short-break")[0];
const longBreak = document.getElementsByClassName("long-break")[0];
const pomodoro = document.getElementsByClassName("pomodoro")[0];

let minutes = 25;
let seconds = 0;
let pomodoroTime;
let isRunning = false;

function startTimer() {
    pomodoroTime = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(pomodoroTime);
        isRunning = false;
        pauseEl.innerHTML = "RESUME";
  
        if (isBreak) {
          if (shortBreak.classList.contains("active")) {
            longBreak.click();
          } else {
            pomodoro.click();
          }
        } else {
          shortBreak.click();
        }
      } else {
        if (seconds === 0) {
          seconds = 59;
          minutes--;
        } else {
          seconds--;
        }
  
        pomodoroEl.innerHTML = `${minutes < 10 ? "0" : ""}${minutes} : ${
          seconds < 10 ? "0" : ""
        }${seconds}`;
      }
    }, 1000);
  }
  
  startEl.addEventListener("click", () => {

    startTimer();
    isRunning = true;
    
  });
  
  pauseEl.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(pomodoroTime);
      isRunning = false;
    } else {
      startTimer();
      isRunning = true;
    }
    pauseEl.innerHTML = isRunning ? "PAUSE" : "RESUME";
  });

resetEl.addEventListener("click", () => {
  clearInterval(pomodoroTime);
  pomodoroEl.innerHTML = `25:00`;
  isRunning = false;
  pauseEl.innerHTML = "PAUSE"; 
});

shortBreak.addEventListener("click", () => {
  clearInterval(pomodoroTime);
  minutes = 5;
  seconds = 0;
  pomodoroEl.innerHTML = `05:00`;
  startTimer();
});

longBreak.addEventListener("click", () => {
  clearInterval(pomodoroTime);
  minutes = 10;
  seconds = 0;
  pomodoroEl.innerHTML = `10:00`;
  startTimer();
});

pomodoro.addEventListener("click", () => {
  clearInterval(pomodoroTime);
  minutes = 25;
  seconds = 0;
  pomodoroEl.innerHTML = `25:00`;
});

stopEl.addEventListener("click", () => {
  clearInterval(pomodoroTime);
  shortBreak.click();
  pauseEl.click()
});