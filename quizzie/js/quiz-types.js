$("#progress-wrap").hide();

// qetQuestions.prototype.questionDetail = function (name, question, choices, answer) {
//   this.name = name;
//   this.question = question
//   this.choices = choices;
//   this.answer = answer;
// }



//Change the UI according to each question

//when user selects a quiz through the radio boxes and clicks #red-button
var redButton = document.getElementById('red-button');
var listItems = document.getElementsByClassName('list-items');

if ($('input[type=radio]:selected')) {
	var qetQuestions = new XMLHttpRequest();
	qetQuestions.open('GET', 'data/quizzes.json');
	qetQuestions.onreadystatechange = function () {
	  if(qetQuestions.readyState === 4 && qetQuestions.status === 200) {
	    var quizzes = JSON.parse(qetQuestions.responseText);
	    function printQuestion () {
	    	$('h2').text(quizzes[i].questions.question)	
	    }

	    printQuestion.prototype.next = function () {

	    }

	    printQuestion.prototype.

	    


	    var html = '<ul>';
	    for (var i=0; i<quizzes.length; i += 1) {
	    	html += '<li class="list-items">';
	      html += '<input type="radio" id="choice' + [i] + '">';
	      html += '<label for="choice' + [i] + '">' + quizzes[i].questions.choices + '</label>';
	      html += '</li>';
	    }
	    html += '</ul>';
	    html += '<button id="red-button">SELECT</button>';
	    document.getElementById('choices').innerHTML = html;
	  }
	};
	qetQuestions.send();

}

 


  //show the first question of the selected quiz
    //add percentage to width of #progress-bar
  //show the next question
    //add percentage to width of #progress-bar
//on last question
  //change text of #red-button to "FINISH"
//when user finishes quiz
  //display how many questions were right with percentage
  //add a link to go back to quiz selection


