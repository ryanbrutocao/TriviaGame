// PseudoCode//
//  on click of start button
// starts the game and counter ticking down. 30 second timer for demo purposes.
// regardless of if game is finished, when timer runs out, a finish screen appears taht lets you know the number of correct answers, uncorrect answers, unanswered questions.
// when start game is clicked, page loads a series of questions with answer options.
// only one asnwer per question can be chosen
// when 'done' button is clicked, the correct number of answers, incorrect answers, and unanswered questions is tallied.
//
//-----------Global Variables--------------//
var timer = 0;
var questions = "";
 

var correctAnswer = "";
var incorrectAnswer = "";
var unanswered = "";
var answerChosen = [];
var a1="";
var a2 = "";

// --------- Parts needed  ------------//
// start page, question page, answer page //

//-----------Click events--------------//
// start button
// each question
// done buttom
// when time runs out
//--------QUESTIONS---------//
var questions = [  //---- need to save choices as a variable to check agains correct answer------//
 
   q1,{ Number: 1,
    Question: "This is the first question",
    Answers:["choice 1", "choice 2", "choice 3"],
    Correct: "choice 1"},
   q2,{ Number: 2,
    Question: "This should be different",
    Answers:["first choice", "second choice", "third choice"],
    Correct: "second choice"}

   ]
  
  console.log(questions.q1.Question);
  console.log(questions.q1.Answers[2]);
  console.log(questions.q1.Correct);
  console.log(questions.q2.Question);
  console.log(questions.q2.Answers[1]);
  console.log(questions.q2.Correct);


//-----------Start Button--------------//
// starts the timer
//--- This timer works, just change alert to the checkScore function-----------// also need to start the timer and write to screen a start time
timer = 1500;   

function countdown() {
  setInterval(function(){
    timer;
    if (timer==0){
     setInterval(function() {
       alert("Time's up!");},10);
    }
     $("#timer2").text(timer--); }, 1000);
}
// ------------------- end of timer function----------------//


// && starts the game
// removes the start button and replaces with questoins
//loads screen with questions
$(".startButton").on("click", function() { // Wanting it to load the question and corresponding answers when the start button is clicked//
  $(".questions").text(questions.q1.Question);
});

$(".startButton").on("click", function() {
  $(".answers").text(questions.q1.Answers);
}); // this is its own event because it will create radio buttons on click


// loads the check answer funcion
//loads the 'tally correct answer function' at the end of the function

//-----------Question/answer checker--------------//

// function answerChecker () {

//   if (questions.q1.Correct === questions.q1.Answers){
//   alert("you picked the correct answer");
//   } else {
//     alert(" wrong answer")
//     break;
//   }
// };
// console.log(answerChecker()); 





// needs to identify the correct answer
// can only have one choice clicked at a time

//-----------Functions--------------//
// Start game function//

//Check answer function//

// timer function//

//tally correct answers function//
//----- when done button is clicked
//-----if timer runs out.
//-----------____--------------//




// setTimeout(fiveSeconds, 1000 * 5);



// //  Step 3:
// //  Fill in the blanks to these functions.
// function fiveSeconds() {
//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }













// ________________ Initial pseudocode _________________//
// --------- Parts needed  ------------//
// start page, question page, answer page //

//-----------Click events--------------//
// start button
// each question
// done buttom
// when time runs out


//-----------Start Button--------------//
// starts the timer
// && starts the game
// removes the start button and replaces with questoins
//loads screen with questions
// loads the check answer funcion
//loads the 'tally correct answer function' at the end of the function

//-----------Question/answer--------------//
//array of objects... [question: answer]
// needs to identify the correct answer
// can only have one choice clicked at a time

//-----------Functions--------------//
// Start game function//

//Check answer function//

// timer function//

//tally correct answers function//
//----- when done button is clicked
//-----if timer runs out.
//-----------____--------------//