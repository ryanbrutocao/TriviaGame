var card = $("#quiz-area");

//questions
var questions = [
 {
   Number: 1,
   Question: "How many holes are played in a standard round of golf?",
   Answers: ["9", "12", "15", "18", "19"],
   Correct: "18"
 },
 {
   Number: 2,
   Question: "Which country won the most recent Womens World Cup?",
   Answers: ["America", "France", "Germany", "Spain"],
   Correct: "America"
 },
 {
   Number: 3,
   Question: "How much does a baseball weigh?",
   Answers: ["100 g", "135 g", "145 g", "175 g"],
   Correct: "145 g"
 },
 {
   Number: 4,
   Question:
     "How many goals did Wayne Gretzky score in his professional career?",
   Answers: ["635", "721", "809", "894", "941"],
   Correct: "894"
 },
 {
   Number: 5,
   Question: "How fast can Serena Williams serve a tennis ball?",
   Answers: ["97 MPH", "112 MPH", "123 MPH", "129 MPH", "141 MPH"],
   Correct: "129 MPH"
 }
];

//variable that holds setInterval
var timer;

var game = {
 correctAnswer: 0,
 inCorrectAnswer: 0,
 counter: 120,

 //write method utilized for countdown
 countdown: function() {
  setInterval(function(){
    timer;
    if (timer==0){
      setInterval(function() {
        alert("Time's up!");},10);
      }
      $("#timer2").text(timer--); }, 1000);
 },

 

 //write method to start timer and prepend time remaining to div you want to utilize for time remaining. create for loop over questions array and append to card variable. ex: card.append("<h2>" + questions[i] + question + "<h2>"). then write a nested for loop over questions.Answers.length and append <input type="radio">
 startGame: function() {
   for (var i = 0; i < questions.length; i++) {
     card.append("<h2>" + questions[i].Question + "</h2>");
     for (var j = 0; j < questions[i].Answers.length; j++) {
       card.append("<input type='radio' name='question-" + i +
         "' value='" + questions[i].Answers[j] + "''>" + questions[i].Answers[j]);
         
     }
   }
 },

 //create an inputs variable and assign a value of card.children("input:checked")
 //create a for loop that iterates over inputs.length and use an if/else to check if input[i].val() === questions[i].correctAnswer. if so increment game.correctAnswer by 1 else  increment game.inCorrectAnwer by 1
 done: function() {
var inputs = card.children("input:checked");
console.log('card.children("input:checked")', card.children("input:checked"));
for (i=0; i<inputs.length; i++){
  console.log("inputs.length:", inputs.length);
  console.log("input:checked");
  for (j=0; j<questions[i].Correct.length; j++)

  if (inputs.val() == questions[i].Correct[j]){
    console.log("inputs.val() :", inputs.val());
    console.log("questions[i].Correct[j] :", questions[i].Correct[j]);
    game.correctAnswer++;
    console.log("game.correctAnswer",game.correctAnswre);
  } else {
    game.inCorrectAnswer++;
    console.log("game.inCorrectAnswer",game.inCorrectAnswer);
  }
}
  
 },

 //create result method to display to user correct answers and incorrect answers
 result: function() {
   $("#correct").text(game.correctAnswer);
   $("#incorrect").text(game.inCorrectAnswer);

 }
};

//CLICK EVENTS
$(document).on("click", "#start", function() {
 game.startGame();
});

$(document).on("click", "#done", function() {
 game.done();
});
