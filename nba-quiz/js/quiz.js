////var quiz = [
////  ['What year did Abraham Lincoln sign the Emancipation Proclamation?', '1863'],
////  ['What is the capital city of Florida?', 'tallahasse'],
////  ['Which european country is currently in debt crisis?', 'greece'],
////];
////var question;
////var answer;
////var response;
////var correctQuestion = [];
////var wrongQuestion = [];
////var correctAnswers = 0;
////
////function print(message) {
////  var outputDiv = document.getElementById('output');
////  outputDiv.innerHTML = message;
////}
////
////function printQuestions () {
////  var html = '<ul><li>' + correctQuestion + '</li><li>' + correctQuestion + '</li><li>' + correctQuestion + '</li></ul>';
////  }
////
////for (i = 0; i < quiz.length; i+=1);
////  question = prompt(quiz[i][0]);
////  answer = quiz[i][1];
////  response = prompt(quiz[i][0]);
////    if (response === answer) {
////      correctAnswers += 1;
////      correctQuestion === question.push();
////    } else { 
////      wrongQuestion = question.push();
////    }
////  
//
//// questionsAndAnswers[][] - a 2D array with 3 fields per row. I decided to use the array to track answers so I could 
//// use a for loop to quickly print out a custom list of correct answers the test-taker missed
//
//var questionsAndAnswers= [
//    ["color?", "RED", false],
//    ["flavor?", "SPICY", false],
//    ["time?", "DAWN", false]    
//];
//
//// correctAnswerCount - used as a simple count of correct answers for scorekeeping and flow control
//var correctAnswerCount = 0;
//
//// response - storage of the test-taker's response
//var response = '';
//
//// message - used to build the final message conveying score and corrected answers
//var message = '';
//
//
//// for loop to ask the questions, get the answers, keep the score
//// responses are normalized to uppercase and compared
//// correct answers set the third field of each array row to 'true' and adds one to the score
//
//for( i=0; i<questionsAndAnswers.length; i += 1) {
//    response = prompt('What is my favorite ' + questionsAndAnswers[i][0]);
//    if (response .toUpperCase() === questionsAndAnswers[i][1]) {
//        questionsAndAnswers[i][2] = true;
//        correctAnswerCount += 1;
//    }
//}
//
//// A perfect score gets a simple message.
//// A score of zero gets a rude message.
//// A mixed score displays the score and lists the missed questions with their correct answers
//
//if (correctAnswerCount === questionsAndAnswers.length) {
//    document.write('Congratulations, you got a perfect score!');
//} else if (correctAnswerCount === 0) {
//    document.write( "Total fail. I'm out." ); 
//} else {
//    message = '<p>You got ' + correctAnswerCount + ' correct. Here is where you went wrong:</p>';
//    for(i=0; i<questionsAndAnswers.length; i+=1) {
//        if (questionsAndAnswers[i][2] === false) {
//            message = message + '<p>' + i + '. What is my favorite ' + questionsAndAnswers[i][0] + ' Answer: ' + questionsAndAnswers[i][1] + '</p>';
//        }
//    }
//    document.write(message);   
//}