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


function Quiz () {
	if ($('input[type=radio]:selected')) {
	var qetQuestions = new XMLHttpRequest();
	qetQuestions.open('GET', 'data/quizzes.json');
	qetQuestions.onreadystatechange = function () {
	  if(qetQuestions.readyState === 4 && qetQuestions.status === 200) {
	    var quizzes = JSON.parse(qetQuestions.responseText);
	  	for (i=0; i<quizzes.length; i++) {
	   	$('h2').text(quizzes[i].questions.question);	
	   	var html = '<ul>';
	    for (var i=0; i<quizzes.length; i += 1) {
	    	html += '<li class="list-items">';
	      html += '<input type="radio" id="choice' + [i] + '" name="choices">';
	      html += '<label for="choice' + [i] + '">' + quizzes[i].questions.choices + '</label>';
	      html += '</li>';
	    }


		}
	    
	    }
	    html += '</ul>';
	    html += '<button id="red-button">SELECT</button>';
	    document.getElementById('choices').innerHTML = html;
	  }
	};
	qetQuestions.send();

}

 
 //when a user selects a quiz and clicks #red-button
 	//get value of for attr from label
 	//the value of the for attr will be the id of the input radio from which we will get the text of
 	//the text of the id will point us to which object in JSON to get our questions, question, choices, and answer
 	//print question in h2 
 	//print choices in each label
 	//



  //show the first question of the selected quiz
  	//change text of #red-button to "NEXT"
    //add percentage to width of #progress-bar
    //if user answers correct
    	//add 1 to their score
  //show the next question
    //add percentage to width of #progress-bar
//on last question
  //change text of #red-button to "FINISH"
//when user finishes quiz
  //display how many questions were right with percentage
  //add a link to go back to quiz selection


