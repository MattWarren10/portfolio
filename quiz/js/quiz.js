function Quiz (questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) { //checks to see if guess is correct answer
  if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentQuestionIndex]; //returns current question
};

Quiz.prototype.hasEnded = function () {
  return this.currentQuestionIndex >= this.questions.length; //after guess, we increment the currentQuestionIndex by 1. if they are the same or currentQuestionIndex is greater, the game will end.
};