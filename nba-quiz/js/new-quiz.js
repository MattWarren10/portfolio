var quiz = [
  ["Who was the 16th president of the US?", "ABRAHAM LINCOLN"],
  ["What was the only stated annexed by the US?", "TEXAS"],
  ["The gold rush of 1849 convinced people to move to which state?", "CALIFORNIA"],
];
  
var response;
var question;
var answer;
var correctAnswerCount = 0;
var correctQuestions = [];
var wrongQuestions = [];
var html;
  
function print (message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '';
  return listHTML;
}

for (var i=0; i < quiz.length; i+=1) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = prompt(question);
  response = response.toUpperCase();
    if (response === answer) {
      correctAnswerCount += 1;
      correctQuestions.push(question);
    } else {
      wrongQuestions.push(question);
    }
}


html = '<p>You received ' + correctAnswerCount + '/3 question(s) correct.</p>';
html += 'Question(s) answered correctly: ' + buildList(correctQuestions);

 
print(html);
