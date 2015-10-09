var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/quizzes.json');
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var quizzes = JSON.parse(xhr.responseText);
    var html = '<ul>';
    for (var i=0; i<quizzes.length; i += 1) {
    	html += '<li class="list-item">';
      html += '<input type="radio" id="choice' + [i] + '">';
      html += '<label for="choice' + [i] + '">' + quizzes[i].name + '</label>';
      html += '</li>';
    }
    html += '</ul>';
    document.getElementByTagName('form').innerHTML = html;
  }
};
xhr.send();