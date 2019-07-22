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
 

var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var answerChosen = false;
var a1="";
var a2 = "";

// --------- Parts needed  ------------//
// // start page, question page, answer page //

// 

//-----------Click events--------------//
// start button
// each question
// done buttom
// when time runs out
// var quests = {  //---- need to save choices as a variable to check agains correct answer------// can this be an array? so that I can print each question with jquery on the startButton click?

//-----------Start Button--------------//
// starts the timer
//load a 'Done' button

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
    //--------QUESTIONS---------//
    var questions = [  //---- need to save choices as a variable to check agains correct answer------// can this be an array? so that I can print each question with jquery on the startButton click?
     
       { Number: 1,
        Question: "How many holes are played in a standard round of golf?",
        Answers:["9", "12", "15", "18", "19"],
        Correct: "18"},
       { Number: 2,
        Question: "Which country won the most recent Womens World Cup?",
        Answers:["America", "France", "Germany", "Spain"],
        Correct: "America"},
       { Number: 3,
        Question: "How much does a baseball weigh?",
        Answers:["100 g", "135 g", "145 g", "175 g"],
        Correct: "145 g"},
       { Number: 4,
        Question: "How many goals did Wayne Gretzky score in his professional career?",
        Answers:["635", "721", "809", "894", "941"],
        Correct: "894"},
      {  Number: 5,
        Question: "How fast can Serena Williams serve a tennis ball?",
        Answers:["97 MPH", "112 MPH", "123 MPH", "129 MPH", "141 MPH"],
        Correct: "129 MPH"}
      
       ]
     console.table(questions)
     
    $(".startButton").on("click", function() {     // && starts the game on click
      $(".startButton").hide(); //removes start button from view when clicked
      $(".doneBttn").attr('style', "visibility:visible"); // Makes the "Done" button appear when start button is clicked
      
      // toggle on a 'done' button? have it start set to 'false'
      // $(".gameBox").addClass("<button>","doneBtn")// trying to add a class or id or something so I can add a done() function

  questionLoader();  // loads questions and answers to the screen
  
});

// answerChecker();

//--------working here-----------//
//working to get all possible answers to load with a radio button attached.. then want to run the check function to see if selected answer matches the correct answer.
// use this to build out the questions and then apply the same concepts to fill out the answers etc... 
function questionLoader (){
  for (var i = 0; i < questions.length; i++) {  
    // number. 

  var num = questions[i].Number;
  var q = questions[i].Question;
  let a = questions[i].Answers;
  
  var p=$("<span>").text(num + ". ");
  $("#qa").append("<br>")
  var qspan = $("<span>").text(q);
  $("#qa").append(p)
  $("#qa").append(qspan)
  // console.log(num);

  for (let j=0; j<a.length; j++){
   var ans =questions[i].Answers[j];
   var rBrk = $("<br>");
   var r = $("<input type= checkbox>");
   r.attr("data-name", num)
   r.attr("value", ans) 
   r.addClass("false") 
   $("#qa").append(rBrk)
    $("#qa").append(r, ans);
    
  }
}};     


$(document).on("click", function(){
  $('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
      $(this).attr("class", true)
    }
    else if($(this).is(":not(:checked)")){
      $(this).attr("class", false)       }
    })})  
    
    
    
    // load question on same line as number
    // on new line, load answers
    // give attribute of checkbox to each answer
    // mark each answer as unchecked
    //-----------------------------------------------------
    
    //--------------------------------------------------------
    
    // loads the check answer funcion
    //loads the 'tally correct answer function' at the end of the function


    

//-----------Question/answer checker--------------//
// can I push the checked answer to an array at pos (number)
function answerChecker () {
 $.each( $( "input:checkbox" ), "[class=true]")
  for (let i=0; i<questions[i].Correct.length; i++){
    if (questions[i].Correct == $("input[value]"))
    {alert("This is it")}
  }
}

answerChecker()


$(".doneBttn").on("click", function() { 

});

// for (let i=0; i<questions.length; i++) {
  //   console.log(questions[i].Number);
  //   console.log(questions[i].Answers);
  //   console.log(questions[i].Correct);
    
  //   // for (let j=0; j<questions[i].Correct.length; j++){
  //     var chosen = (questions[i].Number).attr("data-checked", [true || false])
  //     console.log(chosen);
  //   // console.log($(""));

  //       // if ( == "true")
  //       // // && ($("data-qnum") == questions[i].Number)
  //       // // && ($("data-correct") == questions[i].Correct ))
  //       // {
  //       //   alert("Correct!!") 
  //       // }
  //       // else{
  //       // //  alert("false")
  //       // }}
  //   // // for the answer checked.... if answer[j] = question i and checked
  //   } }
    // if question[i].Answer
    // for (let j=0; j=questions.Number)
    // if (($("data-checked") === true) && ($("data-correct") === questions[i].Correct)){
    //   alert("you picked the correct answer");
    //   // correctAnswer++
    //   ;}
    
  
  // else if(("data-checked" === true) && ("data-qa" != questions[i].Correct[j]) ){
  
  // alert("Wrong!")
  // incorrectAnswer++;
  // }
  // else if(("data-checked" === false) && ("data-qa" != questions[i].Correct[j]) ){

  // alert("unanswered, but could also be counting all wrong/unchecked answers too")
  // unanswered++;
  //       }
      
// }};
// answerChecker();





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





 

/////////////////////-------------------///////////////////////////


  // function aLoader (key,value){
  //   for (var i = 0; i < quests.q1.Answers.length; i++) {  //-----possible that I can use a function here?(questions.q1.Answers.length) so that it goes to all question sets?-----//

  //     // 1. Create a variable named "answerBtn" equal to $("<button>");
  //     var answerBtn = $("<br><input><span>");
    
  //     // 2. Then give each "answerBtn" the following classes: "letter-button" "letter" "letter-button-color".
  //     answerBtn.addClass("answers2");
    
  //     // 2. Then give each "answerBtn" a data-attributes of type=radio".
  //     answerBtn.attr("type","radio");
  //     // 4. Then give each "answerBtn" a value of questions.q2.Answers"
  //     answerBtn.attr("value", quests[i]); //thinking q1 could possibly run on a for loop to get all answers for all questions??// 
    
  //     // 5. Then give each "answerBtn" a text equal to "letters[i]".
  //     answerBtn.text(quests.q2.Answers[i]);
    
  //     // 6. Finally, append each "answerBtn" to the "#buttons" div (provided).
  //     $(".answers").append(answerBtn);
    
  //   }} 
  
  // aLoader();
  



///////////////------------------------------------///////////////////////////////////////








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
//-----------____--------------