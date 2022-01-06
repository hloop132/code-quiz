//Countdown Timer
var timeEl = document.querySelector("#timer");
var playBtn = document.querySelector("#play");
var questionsEl = document.querySelector("#questions");
var timerInterval;
var opening = document.querySelector("#opening");
var secondsLeft = 60;
var questions = [
  {
    q: "What color do goats see best? ",
    a: ["orange", "green", "purple", "black"],
    c: "orange",
  },
  {
    q: "Its rare for opossums to get Rabies beacuse ____",
    a: [
      "they are little",
      "they have a low body temp",
      "are scavengers",
      "live in trees",
    ],
    c: "they have a low body temp",
  },
  {
    q: "Chickens can't taste _____",
    a: ["corn", "sugar", "hot peppers", "bread"],
    c: "hot peppers",
  },
  {
    q: "Cats will try to heal you with _____",
    a: ["scratches", "head bumps", "kneeding", "purring"],
    c: "purring",
  },
];
var title = document.querySelector("#title");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var answerBtn = document.querySelector("answer");

var currentQuestion = 0;
var score = 0;
var scoreArray = [];
var timerInterval = false;

var submitInt = document.querySelector("#sub-int");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submitBtn");

var localStorage = document.querySelector("#local-storage");
var startOverBtn = document.querySelector("#start-over-btn");
var clearBtn = document.querySelector("#clear-high-btn");

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

playBtn.addEventListener("click", function () {
  setTime();

  questionsEl.removeAttribute("hidden");
  opening.setAttribute("hidden", true);
  showQuestions();
});

function showQuestions() {
  title.textContent = questions[currentQuestion].q;
  btn1.textContent = questions[currentQuestion].a[0];
  btn2.textContent = questions[currentQuestion].a[1];
  btn3.textContent = questions[currentQuestion].a[2];
  btn4.textContent = questions[currentQuestion].a[3];

  btn1.addEventListener("click", selectAnswer);
  btn2.addEventListener("click", selectAnswer);
  btn3.addEventListener("click", selectAnswer);
  btn4.addEventListener("click", selectAnswer);
}

function selectAnswer(event) {
  // if you click on the right answer, alert that they're right!
  if (event.target.textContent === questions[currentQuestion].c) {
    alert("Correct Answer");
  }
  // if you click on the wrong answers, alert that they're wrong and subtract 10 seconds
  else {
    alert("Wrong Answer");
    secondsLeft = secondsLeft - 10;
  }
  // go to next question
  currentQuestion++;
  // IF CURRENT QUESTION IS UNDER is under 4

  //is still questions going
  if (currentQuestion < 4) {
    showQuestions();
  }
  // question stop
  else {
    submitInt.removeAttribute("hidden");
    questionsEl.setAttribute("hidden", true);
    // your timer stops
    clearInterval(timerInterval);
  }

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = initialsEl.value;
    var obj = {
      initials: initials,
      secondsLeft: secondsLeft,
    };
    localStorage.setItem("initials", JSON.stringify(obj));
  });
}
function localStorageFun() {
  var value = localStorage.getItem("initials");
  userInitialSpan.textContent = initialsEl;
}
submitBtn.addEventListener("click", selectfinalScore);

var score = 0;
var highscore = localStorage.getItem("localStorage")

if(highscore !== null){
  if (score > highscore) {
    localStorage.setItem("localStorage", score);
  }
  else{ 
    localStorage.setItem("score", score);
  }

  // var localStorage = [];
  // function addScore(init, score){
  //     highScore.push([initialsEl:init, timerInterval:score])
  // }
}
  // object.addEventListener("click", myScript);
  // ClearBtn.addEventListener("click", clear) {
  //   var clear = clear

// startOverBtn.addEventListener("click",  
//   <a href = "index2.html"><h3>High Scores</h3></a>);
// }
//how to link seperate html
//how to store all scores in an array
//how do you add to an array
//how do you pull array out of lpocal straoge and display it

// var localStorage = document.querySelector("#local-storage");
// var startOverBtn = document.querySelector("#go-back-btn");
// var clearBtn = document.querySelector("#clear-high-btn");