const BTNreload = document.querySelector(".start-game-container__bar--reload"),
  labelScore = document.querySelector(".start-game-container__bar--score"),
  labelTimer = document.querySelector(".start-game-container__bar--timer"),
  labelQuestion = document.querySelector(
    ".start-game-container__for-question--question"
  ),
  labelA = document.querySelector(".start-game-container__answers--textA"),
  labelB = document.querySelector(".start-game-container__answers--textB"),
  labelC = document.querySelector(".start-game-container__answers--textC"),
  labelD = document.querySelector(".start-game-container__answers--textD"),
  BTNanswerA = document.querySelector(
    ".start-game-container__answers--answerA"
  ),
  BTNanswerB = document.querySelector(
    ".start-game-container__answers--answerB"
  ),
  BTNanswerC = document.querySelector(
    ".start-game-container__answers--answerC"
  ),
  BTNanswerD = document.querySelector(
    ".start-game-container__answers--answerD"
  ),
  BTNstart = document.querySelector(".welcome-container__btn"),
  BTNnext = document.querySelector(".start-game-container__next--btn"),
  containerWelcome = document.querySelector(".welcome-container"),
  containerStartGame = document.querySelector(".start-game-container"),
  containerTHEEND = document.querySelector(".THE-END-container"),
  labelScoreTHEEND = document.querySelector(".THE-END-container--score"),
  containerTIMEDOWN = document.querySelector(".time-down-container");

let score = 0;
let stage = 1;
let selectedAnswer;
let correctWord = "";
let time = 15;

BTNstart.addEventListener("click", () => {
  containerWelcome.classList.add("hidden");
  containerStartGame.classList.remove("hidden");
  stage = 1;
  labelQuestion.textContent = stage1.question;
  labelA.textContent = stage1.answerA;
  labelB.textContent = stage1.answerB;
  labelC.textContent = stage1.answerC;
  labelD.textContent = stage1.answerD;
  const timeDown = setInterval(() => {
    time--;
    labelTimer.textContent = time;
    if (time === 0) {
      clearInterval(timeDown);
      containerStartGame.classList.add("grayscale");
      containerTIMEDOWN.classList.remove("hidden");
      containerTIMEDOWN.classList.add("flex");
    } else if (stage === "the end") {
      clearInterval(timeDown);
    }
  }, 1000);
});

const stage1 = {
  question: "Jaki jest symbol chemiczny srebra?",
  answerA: "Hg",
  answerB: "Mg",
  answerC: "Ag",
  answerD: "Sg",
  correctAnswer: "Ag",
};

const stage2 = {
  question: "Gdzie urodził się Mikołaj Kopernik?",
  answerA: "Toruń",
  answerB: "Wrocław",
  answerC: "Kopenhaga",
  answerD: "Poznań",
  correctAnswer: "Toruń",
};

const stage3 = {
  question: "Jak nazywała się I epoka historyczna?",
  answerA: "Średniowiecze",
  answerB: "Nowożytność",
  answerC: "Epoka Kamienia Łupanego",
  answerD: "Starożytność",
  correctAnswer: "Starożytność",
};

const stage4 = {
  question: "Pierwszy król Polski",
  answerA: "Mieszko I",
  answerB: "Bolesław Chrobry",
  answerC: "Zaisza Czarny",
  answerD: "Lech Wałęsa",
  correctAnswer: "Bolesław Chrobry",
};

const stage5 = {
  question: "Kto jest autorem słów do polskiego hymnu?",
  answerA: "Komorowski",
  answerB: "Pazura",
  answerC: "Kwaśniewski",
  answerD: "Wybicki",
  correctAnswer: "Wybicki",
};

BTNanswerA.addEventListener("click", () => {
  BTNanswerA.style.backgroundColor = "lightgray";
  BTNanswerB.style.backgroundColor = "white";
  BTNanswerC.style.backgroundColor = "white";
  BTNanswerD.style.backgroundColor = "white";
  selectedAnswer = labelA.textContent;
});

BTNanswerB.addEventListener("click", () => {
  BTNanswerA.style.backgroundColor = "white";
  BTNanswerB.style.backgroundColor = "lightgray";
  BTNanswerC.style.backgroundColor = "white";
  BTNanswerD.style.backgroundColor = "white";
  selectedAnswer = labelB.textContent;
});

BTNanswerC.addEventListener("click", () => {
  BTNanswerA.style.backgroundColor = "white";
  BTNanswerB.style.backgroundColor = "white";
  BTNanswerC.style.backgroundColor = "lightgray";
  BTNanswerD.style.backgroundColor = "white";
  selectedAnswer = labelC.textContent;
});

BTNanswerD.addEventListener("click", () => {
  BTNanswerA.style.backgroundColor = "white";
  BTNanswerB.style.backgroundColor = "white";
  BTNanswerC.style.backgroundColor = "white";
  BTNanswerD.style.backgroundColor = "lightgray";
  selectedAnswer = labelD.textContent;
});

BTNreload.addEventListener("click", () => {
  window.location.reload();
});

const checkCorrectAnswer = function () {
  if (
    selectedAnswer === stage1.correctAnswer ||
    selectedAnswer === stage2.correctAnswer ||
    selectedAnswer === stage3.correctAnswer ||
    selectedAnswer === stage4.correctAnswer ||
    selectedAnswer === stage5.correctAnswer
  ) {
    score++;
    labelScore.textContent = score;
  }
};

const correctPolszczyzna = function () {
  if (score === 0 || score === 5) {
    correctWord = "punktów";
  }
  if (score === 1) {
    correctWord = "punkt";
  }
  if (score === 2 || score === 3 || score == 4) {
    correctWord = "punkty";
  }
};

BTNnext.addEventListener("click", () => {
  checkCorrectAnswer();
  if (stage === 1) {
    time = 16;
    stage = 2;
    labelQuestion.textContent = stage2.question;
    labelA.textContent = stage2.answerA;
    labelB.textContent = stage2.answerB;
    labelC.textContent = stage2.answerC;
    labelD.textContent = stage2.answerD;
    BTNanswerA.style.backgroundColor = "white";
    BTNanswerB.style.backgroundColor = "white";
    BTNanswerC.style.backgroundColor = "white";
    BTNanswerD.style.backgroundColor = "white";
  } else if (stage === 2) {
    time = 16;
    stage = 3;
    labelQuestion.textContent = stage3.question;
    labelA.textContent = stage3.answerA;
    labelB.textContent = stage3.answerB;
    labelC.textContent = stage3.answerC;
    labelD.textContent = stage3.answerD;
    BTNanswerA.style.backgroundColor = "white";
    BTNanswerB.style.backgroundColor = "white";
    BTNanswerC.style.backgroundColor = "white";
    BTNanswerD.style.backgroundColor = "white";
  } else if (stage === 3) {
    time = 16;
    stage = 4;
    labelQuestion.textContent = stage4.question;
    labelA.textContent = stage4.answerA;
    labelB.textContent = stage4.answerB;
    labelC.textContent = stage4.answerC;
    labelD.textContent = stage4.answerD;
    BTNanswerA.style.backgroundColor = "white";
    BTNanswerB.style.backgroundColor = "white";
    BTNanswerC.style.backgroundColor = "white";
    BTNanswerD.style.backgroundColor = "white";
  } else if (stage === 4) {
    time = 16;
    stage = 5;
    labelQuestion.textContent = stage5.question;
    labelA.textContent = stage5.answerA;
    labelB.textContent = stage5.answerB;
    labelC.textContent = stage5.answerC;
    labelD.textContent = stage5.answerD;
    BTNanswerA.style.backgroundColor = "white";
    BTNanswerB.style.backgroundColor = "white";
    BTNanswerC.style.backgroundColor = "white";
    BTNanswerD.style.backgroundColor = "white";
  } else if (stage == 5) {
    stage = "the end";
    correctPolszczyzna();
    containerTHEEND.classList.remove("hidden");
    containerTHEEND.classList.add("flex");
    containerStartGame.classList.add("grayscale");
    labelScoreTHEEND.textContent = `${score} ${correctWord}`;
  }
});
