function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function setStartBtnStatus(isStarted, btn) {
    if (isStarted) {
        btn.setAttribute("disabled", "disabled");
    } else {
        btn.removeAttribute("disabled");
    };  
};

function setStopBtnStatus(isStoped, btn) {
    if (isStoped) {
        btn.setAttribute("disabled", "disabled");
    } else {
        btn.removeAttribute("disabled");
    };    
};

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let intervalId = null;

let isStarted = false; 
let isStoped = true;
 
startBtn.addEventListener('click', () => {
    if (isStarted) {
        return;
    }
        
    isStarted = true;
    isStoped = false;
    setStartBtnStatus(isStarted, startBtn);
    setStopBtnStatus(isStoped, stopBtn);
    intervalId = setInterval(() => {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
    }, 1000);

});

stopBtn.addEventListener('click', () => {
    isStarted = false;
    isStoped = true;
    setStartBtnStatus(isStarted, startBtn);
    setStopBtnStatus(isStoped, stopBtn);
    clearInterval(intervalId);
});














