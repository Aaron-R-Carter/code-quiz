

//startButton Counter
var startButton = document.querySelector("#start-quiz-btn");
var timerDiv = document.querySelector("#timer");
timerDiv.textContent = 75;

var counter = parseInt(timerDiv.textContent);

var timeInterval = ""

//questions

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
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
    timeInterval = setInterval(timeCounter, 1000);
})

// time counter function

function timeCounter() {
    counter = counter - 1
    timerDiv.textContent = counter;
    if (counter < 1) {
        clearInterval(timeInterval);

    }
}

//print question function

function printQuestion() {



}

console.log(questions[0].title)





// startButton.addEventListener("click", myInterval)


// timerElement.textConent = timerText; 



// function to decrement timerText

// while (counter > -1 && < 75){ 

//     var myInterval = setInterval(function () {
//   timerText = timerText-- ;
// }, 1000)};



// upon "start" button, a question and multiple choice options appear

// set choices to correct or incorrect

// store time



// score and initials local storage
