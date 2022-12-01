import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    startBtn: document.querySelector("button[data-start]"),
    dateValue: document.querySelector("#datetime-picker"),
    daysField: document.querySelector("[data-days]"),
    hoursField: document.querySelector("[data-hours]"),
    minutesField: document.querySelector("[data-minutes]"),
    secondsField: document.querySelector("[data-seconds]"),
}

let intervalId = null;
let deltaTime = null;
let timeStampSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    timeStampSelectedDate = selectedDates[0].getTime();
    checkDate(selectedDates[0], refs.startBtn);
    deltaTime = timeStampSelectedDate - Date.now();
  },
};

flatpickr(refs.dateValue, options);

function checkDate(date, btn) {
    if (date.getTime() < Date.now()) {
        btn.setAttribute("disabled", "disabled");
        Notify.failure('Please choose a date in the future');
    } else {
        btn.removeAttribute("disabled");
    }   
}
 
refs.startBtn.addEventListener('click', () => {
   refs.startBtn.setAttribute("disabled", "disabled");
    intervalId = setInterval(() => {
        deltaTime -= 1000;

        if (timeStampSelectedDate <= Date.now()) {
            clearInterval(intervalId);
        };

        let { days, hours, minutes, seconds } = convertMs(deltaTime);
        updateTimerFace( { days, hours, minutes, seconds } );
    }, 1000);
});

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTimerFace( { days, hours, minutes, seconds } ) {
    refs.daysField.textContent = days;
    refs.hoursField.textContent = hours;
    refs.minutesField.textContent = minutes;
    refs.secondsField.textContent = seconds;
}





