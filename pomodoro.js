const pomodoroEl=document.getElementById("pomodoro-timer-el")
const startEl=document.getElementById("start-el")
const stopEl=document.getElementById("stop-el")
const pauseEl=document.getElementById("pause-el")
const resetEl=document.getElementById("reset-el")
let minutes=25
let seconds=0
let pomodoroTime
startEl.addEventListener("click",function(){
  pomodoroTime=setInterval(() => {
    if (seconds===0) {
      seconds=59
      minutes--
    }
    else{
      seconds--
    }
    pomodoroEl.innerHTML=`${minutes} : ${seconds}`
  }, 1000);
 
})
pauseEl.addEventListener('click',()=>{
  clearInterval(pomodoroTime)
})
resetEl.addEventListener("click",()=>{
  clearInterval(pomodoroTime)
  pomodoroEl.innerHTML=`25:00`
})