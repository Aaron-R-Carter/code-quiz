//global index default

var index = 0;

// div selectors

var titleHeading = document.querySelector("#title-heading");
var startButton = document.querySelector("#start-quiz-btn");
var highScoreButton = document.querySelector("#high-score");
var timerDisplay = document.querySelector("#timer-display")
var timerDiv = document.querySelector("#timer");
var questionsDisplay = document.querySelector("#questions-display");
var isCorrect = document.querySelector("#is-correct");

//choice button array creator

var button = document.querySelectorAll(".answer-btn");
var answerButtonArray = Array.from(button);


// divs for questions, choices & answers

var questionsDiv = document.querySelector("#questions");
var choicesDiv = document.querySelector("#choices");

// button selector variables

var choice1 = document.querySelector("#choice-1");
var choice2 = document.querySelector("#choice-2");
var choice3 = document.querySelector("#choice-3");
var choice4 = document.querySelector("#choice-4");

// array of buttons to input text content

var choicesArray = [choice1, choice2, choice3, choice4];

// questions

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

    {
        title: "This code quiz game project was how difficult?",
        choices: ["difficult", "very difficult", "dude wtf", "i quit"],
        answer: "dude wtf"
    },

];

// Timer: initialize data

timerDiv.textContent = (75 + " seconds");
var counter = parseInt(timerDiv.textContent);
var timeInterval = ""


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


/////// FUNCTIONS /////////

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

    //loop to print text of choices 

    for (var i = 0; i < questions[index].choices.length; i++) {
        choicesArray[i].textContent = questions[index].choices[i];
        questionsDiv.textContent = questions[index].title;

    };

}

// event listener for choice buttons click

for (i = 0; i < answerButtonArray.length; i++) {

    answerButtonArray[i].addEventListener("click", function () {
        index = index + 1;
        printQuestion();
    });

};


// set choices to correct or incorrect

// store time

// score and initials local storage