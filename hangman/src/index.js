const container = document.getElementById("alphabetButtons");
let answerDisplay = document.getElementById("answerPlaceholder");
let chosenWord = {};
let answer = "";
let lives = 10;
let wordDisplay = [];
let winningCheck = "";
const buttonReset = document.getElementById("reset");
const buttonPlayAgain = document.getElementById("playAgain");
const gameStatus = document.getElementById("gameStatus");
const details = document.getElementById("details");
const overlay = document.getElementById("overlay");
const livesDisplay = document.getElementById("lives");
const talersDisplay = document.getElementById("talers");
let stickman = document.getElementById("stickman");
let context = stickman.getContext("2d");


function handleClick(event) {
    const isButton = event.target.nodeName === "BUTTON";
    if (isButton) {
        const buttonId = document.getElementById(event.target.id);
        buttonId.classList.add("selected");
        buttonId.disabled = true;
    }
}

//set answer
function setAnswer() {
    const wordOrder = Math.floor(Math.random() * words.length);
    chosenWord = words[wordOrder];
    answer = chosenWord.word;
    answerDisplay.innerHTML = generateAnswerDisplay(chosenWord.word);
}

function generateAnswerDisplay(word) {
    let wordArray = word.split("");
    for (let i = 0; i < answer.length; i++) {
        if (wordArray[i] !== "-") {
            wordDisplay.push("_");
        } else {
            wordDisplay.push("-");
        }
    }
    return wordDisplay.join(" ");
}


//setting initial condition
function init() {
    overlay.classList.remove('active');
    lives = 10;
    let talers = sessionStorage.getItem("talers");
    talersDisplay.innerHTML = talers ? talers : 0;
    wordDisplay = [];
    winningCheck = "";
    context.clearRect(0, 0, 400, 400);
    canvas();
    livesDisplay.innerHTML = lives;
    setAnswer();
    let alphabetButtons = Array.from(document.getElementsByClassName("alphabetButton"));
    alphabetButtons.forEach(function (element) {
        element.disabled = false;
        element.classList.remove("selected");
    });
    container.addEventListener("click", handleClick);
}

window.onload = init();

//reset, play again
buttonReset.addEventListener("click", init);
buttonPlayAgain.addEventListener("click", init);

function showOverlay(success) {
    overlay.classList.add('active');
    gameStatus.innerHTML = success ? `Перамога &#x1F389;` : `Паражэнне &#x1F61E;`;
    details.innerHTML = `Загаданае слова: <strong>${chosenWord.word}</strong><br>${chosenWord.definition}`;
}

function handleTalers(success) {
    let amount = 0;
    let currentAmount = parseInt(sessionStorage.getItem("talers")) || 0;
    if (success) {
        amount = new Set(answer).size;
    } else if (!success && currentAmount > 0) {
        amount = -1;
    }
    sessionStorage.setItem("talers", currentAmount + amount);
}

//guess click
function guess(event) {
    const guessWord = event.target.id;
    const answerArray = answer.split("");
    let counter = 0;
    if (answer === winningCheck) {
        showOverlay(true);
        handleTalers(true);
    } else {
        if (lives > 0) {
            for (let j = 0; j < answer.length; j++) {
                if (guessWord === answerArray[j]) {
                    wordDisplay[j] = guessWord;
                    answerDisplay.innerHTML = wordDisplay.join(" ");
                    winningCheck = wordDisplay.join("");
                    counter += 1;
                }
            }
            if (counter === 0) {
                lives -= 1;
                counter = 0;
                animate();
            } else {
                counter = 0;
            }
            if (lives > 0) {
                livesDisplay.innerHTML = lives;
            } else {
                showOverlay(false);
                handleTalers(false);
            }
        } else {
            return;
        }
        if (answer === winningCheck) {
            showOverlay(true);
            handleTalers(true);
        }
    }
}

container.addEventListener("click", guess);

// draw Hangman
function animate() {
    drawArray[lives]();
}

function canvas() {
    stickman = document.getElementById("stickman");
    context = stickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#d10000";
    context.lineWidth = 2;
}

function head() {
    stickman = document.getElementById("stickman");
    context = stickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

function frame1() {
    draw(0, 150, 150, 150);
}

function frame2() {
    draw(10, 0, 10, 600);
}

function frame3() {
    draw(0, 5, 70, 5);
}

function frame4() {
    draw(60, 5, 60, 15);
}

function torso() {
    draw(60, 36, 60, 70);
}

function rightArm() {
    draw(60, 46, 100, 50);
}

function leftArm() {
    draw(60, 46, 20, 50);
}

function rightLeg() {
    draw(60, 70, 100, 100);
}

function leftLeg() {
    draw(60, 70, 20, 100);
}

let drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1
];
