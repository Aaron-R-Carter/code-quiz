// Div Selectors

var titleHeading = document.querySelector("#title-heading");
var startButton = document.querySelector("#start-quiz-btn");
var highScoreButton = document.querySelector("#high-score");
var timerDisplay = document.querySelector("#timer-display")
var timerDiv = document.querySelector("#timer");
var questionsDisplay = document.querySelector("#questions-display");
var isCorrect = document.querySelector("#is-correct");


// Timer: initialize data

timerDiv.textContent = (75 + " seconds");
var counter = parseInt(timerDiv.textContent);
var timeInterval = ""

//questions, choices & answers

var questionsDiv = document.querySelector("#questions");
var choicesDiv = document.querySelector("#choices");

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["Strings ", "Booleans ", "Alerts ", "Numbers "],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

];

//start button click event function

startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    highScoreButton.style.display = "none";
    titleHeading.style.display = "none";
    timerDisplay.classList.remove("hidden-element");
    questionsDisplay.classList.remove("hidden-element");
    printQuestion();
    timeInterval = setInterval(timeCounter, 1000);
})

// time counter function

function timeCounter() {
    counter = counter - 1
    timerDiv.textContent = (counter + " seconds");
    if (counter < 1) {
        clearInterval(timeInterval);
    }
}

//print question function


function printQuestion() {

    var choice1 = document.querySelector("#choice-1");
    var choice2 = document.querySelector("#choice-2");
    var choice3 = document.querySelector("#choice-3");
    var choice4 = document.querySelector("#choice-4");

    var choicesArray = [choice1, choice2, choice3, choice4];
    for (var i = 0; i < questions[0].choices.length; i++) {
        choicesArray[i].textContent = questions[0].choices[i];

    }
    questionsDiv.textContent = questions[0].title;
}

//print choices function




// function printChoices() {


//     }

// }


if (questions[i].choices[0] === questions[i].answer) {
    isCorrect.textContent = "Correct!";
    score++;
}
else {
    isCorrect.textContent = "Wrong!";
    secondsLeft -= 10;
}
i++;
questionSetter();


// set choices to correct or incorrect

// store time

// score and initials local storage
