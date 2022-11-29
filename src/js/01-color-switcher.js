function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function setBtnStatus(isStarted, btn) {
    if (isStarted) {
        btn.setAttribute("disabled", "disabled");
    } else {
        btn.removeAttribute("disabled");
    };  
    
};

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let intervalId = null;

let isStarted = false; 
 
startBtn.addEventListener('click', () => {
    if (isStarted) {
        return;
    }
        
    isStarted = true;
    setBtnStatus(isStarted, startBtn);
    intervalId = setInterval(() => {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
    }, 1000);

});

stopBtn.addEventListener('click', () => {
    isStarted = false;
    setBtnStatus(isStarted, startBtn);
    clearInterval(intervalId);
});













