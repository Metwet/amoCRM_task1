const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const formatInput = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1:');
  };

  inputEl.value = formatInput(inputEl.value).slice(0, 8);
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  console.log(seconds);

  animateTimer(seconds);

  inputEl.value = '';
});
