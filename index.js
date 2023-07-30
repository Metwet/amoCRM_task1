const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  let interval;

  return (seconds) => {

    if(seconds > 359999){
      seconds = 359999;
    }
    
    const formatTime = (time) => {
      return String(time).padStart(2, '0');
    };

    if(interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(interval);
        timerEl.textContent = '00:00:00';
      } else {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
        timerEl.textContent = formattedTime;
        seconds--;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const formatInput = (value) => {
    return value.replace(/\D/g, '');
  };

  inputEl.value = formatInput(inputEl.value);
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
