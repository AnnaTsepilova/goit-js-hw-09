import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

const refs = {
  firstDelayInput: document.querySelector("input[name=delay]"),
  delayStepInput: document.querySelector("input[name=step]"),
  amountInput: document.querySelector("input[name=amount]"),
  createPromisesBtn: document.querySelector("button"),
}

refs.createPromisesBtn.addEventListener('click', (event) => {
  event.preventDefault();

  let delayTime = Number.parseInt(refs.firstDelayInput.value);

  for (let i = 0; i < Number.parseInt(refs.amountInput.value); i += 1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += Number.parseInt(refs.delayStepInput.value);
  }

  
});

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
      
}