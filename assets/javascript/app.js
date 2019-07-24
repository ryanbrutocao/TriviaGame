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
// timer = 3;   


var game = {
  totalQs: 0,
  unanswered: 0,
  correctAnswer: 0,
  inCorrectAnswer: 0,
  counter: 50,
  

    
countdown: function() {
  game.counter;
  setInterval(function(){
    
    if (game.counter===0){
      
      game.done();
      $(".qa").hide();
       $("#results").attr('style', "visibility: visible");
    }
      $("#timer2").text(game.counter--); }, 1000);
    
    },


 //write method to start timer and prepend time remaining to div you want to utilize for time remaining. create for loop over questions array and append to card variable. ex: card.append("<h2>" + questions[i] + question + "<h2>"). then write a nested for loop over questions.Answers.length and append <input type="radio">
 startGame: function() {
   for (var i = 0; i < questions.length; i++) {
    totalQs= questions[i].Number;
    console.log(totalQs);
     card.append("<h4 class='headingQ'>" + questions[i].Question + "</h4>");
    //  card.addClass('card')
     
     for (var j = 0; j < questions[i].Answers.length; j++) {
       card.append("<input type='radio' name='question-" + i +
         "' value=' " + questions[i].Answers[j] + "''>" + questions[i].Answers[j]);
         
         
     }
   }
 },

 //create an inputs variable and assign a value of card.children("input:checked")
 //create a for loop that iterates over inputs.length and use an if/else to check if input[i].val() === questions[i].correctAnswer. if so increment game.correctAnswer by 1 else  increment game.inCorrectAnwer by 1
 done: function() {
   var inputs = card.children("input:checked");
   console.log('card.children("input:checked")', card.children("input:checked"));
   console.log(card.children());
      
  for (i=0; i<inputs.length; i++){
  console.log("inputs[i]:", inputs[i]);

  for (j=0; j<questions[i].Correct[j].length; j++){
    console.log("questions[i].correct: ", questions[i].Correct);
    console.log("input[i] checked value :", inputs[i].value);
    console.log("questions[j].correct: ", questions[j].Correct);
    console.log("input[j] checked value :", inputs[j].value);

    console.log("inputs.val() :", inputs.val());
    console.log("questions[i].Correct[j] :", questions[i].Correct[j]);

    // if ( questions[i].Correct == inputs[j].value){
   if ( inputs[i].value.trim() == questions[i].Correct){
     game.correctAnswer++;
     game.result();
     console.log("inputs.val() :", inputs.val());
     console.log("game.correctAnswer",game.correctAnswer);
    } 
    
    else {
      game.inCorrectAnswer++;
      game.result();
      console.log("game.inCorrectAnswer",game.inCorrectAnswer);
    }
  }
}
    unanswered = totalQs - game.correctAnswer - game.inCorrectAnswer 
    $("#unchecked").text(unanswered)
    
    console.log("total Qs: ",totalQs);
    console.log("correctAnwer:", game.correctAnswer);
    console.log("inCorrectAnwer:", game.inCorrectAnswer);
    console.log("unanswered:", unanswered);
 
  // unchecked -  take if number of ansers in array === number of unchecked, unanswered++
  console.log(unanswered);
},

result: function() {
  $("#correct").text(game.correctAnswer);
  $("#incorrect").text(game.inCorrectAnswer);

}

 //create result method to display to user correct answers and incorrect answers
};

//CLICK EVENTS
$(document).ready(function(){
  $("#done").hide()
  $("#results").hide();
  $(".qa").hide();
});

$(document).on("click", "#start", function() {
  $(".qa").attr('style', "visibility: visible")
 game.startGame();
 game.countdown();
 $("#start").hide();
 $("#done").attr('style', "visibility: visible");
 //  $(".doneBttn").attr('style', "visibility:visible");
});

$(document).on("click", "#done", function() {
  game.done();
  $(".qa").hide();
  $("#results").attr('style', "visibility: visible");
});
