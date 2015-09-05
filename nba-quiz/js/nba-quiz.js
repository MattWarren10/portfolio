//questions and answers
var quiz = [
  ['The Charlotte Hornets drafted which player in the 1996 NBA draft?', 'kobe bryant'],
  ['Which commissioner preceeded Adam Silver?', 'david stern'],
]

//vars to store user input, correct questions and answers, wrong questions and answers, and output text.
var response;
var question;
var answer;
var correctAnswerCount = 0;
var correctQ = [];
var correctA = [];
var wrongQ = [];
var wrongA = [];
var htmlCorrect;
var htmlWrong;

//grabs the first div dedicated to correct questions and answers
  function printCorrect (message) {
    var divLeft = document.getElementById('correct');
    divLeft.innerHTML = message;
  }

//grabs the secons div dedicated to wrong questions and answers
  function printWrong (message) {
    var divRight = document.getElementById('wrong');
    divRight.innerHTML = message;
  }   

//creates a list to display correct questions and answers
  function liCorrect (arr) {
    var correctListHTML = '';
    for (i=0; i < correctQ.length; i++) {
     var listCorrectQ = correctQ[i];
     var listCorrectA = correctA[i];
     correctListHTML += '<li>' + listCorrectQ + '<br>' + listCorrectA + '</li>';
    }
    
    return correctListHTML;
  }

//creates a list to display wrong questions and answers
    function liWrong (arr) {
    var wrongListHTML = '';
    for (i=0; i < wrongQ.length; i++) {
     var listWrongQ = wrongQ[i];
     var listWrongA = wrongA[i];
     wrongListHTML += '<li>' + listWrongQ + '<br>' + listWrongA + '</li>';
    }
    
    return wrongListHTML;
  }
      
    
//stores correct and wrong answers user supplies into two different arrays 
for (i = 0; i < quiz.length; i += 1) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = prompt(question);
  response = response.toLowerCase();
    if (response === answer) {
        correctAnswerCount += 1;
        correctQ.push(question);
        correctA.push(answer);
      } else {
        wrongQ.push(question);
        wrongA.push(answer);
      }
}

//communicates score to user 
htmlCorrect = '<p>You answered ' + correctAnswerCount + '/2 question(s) correctly.</p>';
htmlCorrect += '<p>Correct questions and answers:</p><ol>' + liCorrect() + '</ol>';
printCorrect(htmlCorrect);

htmlWrong = '<p>Sorry bro. You did not get all of them right.</p>';
htmlWrong += '<ol>' + liWrong() + '</ol>';

//decides to post wrong questions if user misses answers
if (correctAnswerCount < 2) {
  printWrong(htmlWrong);
}
        