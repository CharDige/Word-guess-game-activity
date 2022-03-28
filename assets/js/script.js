var startButton = document.getElementById("start");
var timeEl = document.getElementById("timeleft");
var secondsLeft = 20;
var testWinButton = document.getElementById("test-wins");
var testLoseButton = document.getElementById("test-losses");
var winsEl = document.getElementById("saved-wins");
var lossesEl = document.getElementById("saved-losses");
var restartButton = document.getElementById("restart");

var winCount = localStorage.getItem("winCount");
var lossCount = localStorage.getItem("lossCount");

winsEl.textContent = winCount;
lossesEl.textContent = lossCount;


function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Times up!";
}

// Timer starts when button clicked
startButton.addEventListener("click", function() {
    setTimer();
    startButton.disabled = true;
});

// Testing win and loss buttons
testWinButton.addEventListener("click", function() {
    if (winCount < 100) {
        winCount++;
        winsEl.textContent = winCount;
        localStorage.setItem("winCount", winCount);
    }
});

testLoseButton.addEventListener("click", function() {
    if (lossCount < 100) {
        lossCount++;
        lossesEl.textContent = lossCount;
        localStorage.setItem("lossCount", lossCount);
    }
});

restartButton.addEventListener("click", function() {
    renderScores();
});

function renderScores() {
    localStorage.clear();
    winCount = 0;
    lossCount = 0;
    winsE1.textContent = winCount;
    lossesEl.textContent = lossCount;
};