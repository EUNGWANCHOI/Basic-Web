let message = document.getElementById("message");
let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let attemptsText = document.getElementById("attempts");

let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function renderMessage(text) {
  message.innerText = text;
}

function renderAttempts() {
  attemptsText.innerText = attempts;
}

function guess() {
  let userGuess = Number(guessInput.value);
  attempts++;
  renderAttempts();

  if (userGuess === answer) {
    renderMessage(`정답, ${attempts}번 만에 맞췄음`);
  } else if (userGuess < answer) {
    renderMessage("⬆업");
  } else {
    renderMessage("⬇다운");
  }
}

guessBtn.addEventListener("click", guess);
