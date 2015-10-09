$("#progress-wrap").hide();

function qDetail (name, question, choices, answer) {
	this.name = name;
	this.question = question
	this.choices = choices;
	this.answer = answer;
}

var quizzes = [
	{
		"name": "americanHistory",
		"questions": 
		"choices":
		"answer":
  	["The Declaration of Independence was signed on which date?", ["July 3, 1776", "July 4, 1776", "August 1, 1776", "August 2, 1776"], "August 2, 1776"],
	  ["Christmas morning 1776 George Washington led 2,400 men to initiate which battle?" ["Trenton", "Valley Forge", "New York", "Fort Necessity"], "Trenton"],
	  ["Which two presidents died on the same day" ["Jefferson and Washington", "Washington and Addams", "Addams and Jackson", "Addams and Jefferson"], "Addams and Jefferson"],
	  ["World War II is said to have begun with the German invasion of Poland", [true, false], true],
	  ["Dwight D. Eisenhower launched the Interstate Highway System", [true, false], true]
		
	},
	{

	},
	{

	},
	{

	},

	"colors": [
		["Complimentary colors are pairs which cancel each other out", [true, false], true],
		["Violet has the longest wavelength", [true, false], false],
		["The three primary colors are:", ["red, green, blue", "red, yellow, blue", "red, yellow, green", "magenta, cyan, yellow"], "red, yellow, blue"],
		["More than 24 million colors can be specified through hexadecimal notation" [true, false], false],
		["In RGB notation, #ff00ff would emit which color?" ["green", "pink", "magenta", "purple"], "magenta"]
	],
	"nba": [ 
		 ["In 1996 Kobe Bryant was drafted by which team?", ["Los Angeles Lakers", "Charlotte Hornets", "Orlando Magic", "New York Knicks"], "Charlotte Hornets"],
		 ["What year did David Stern become commissioner?", [1984, 1994, 1989, 1999], 1984],
		 ["Which team retired Michael Jordan's jersey, even though Jordan never played for them?", ["Washington Wizards", "Los Angeles Clippers", "Milwaukee Bucks", "Miami Heat"], "Miami Heat"],
		 ["Which arena has the largest capacity", ["United Center", "Madison Square Garden", "Staples Center", "The Palace of Auburn Hills"], "United Center"],
		 ["Magic Johnson is currently the all-time assist leader", [true, false], true]
	],
	"steveJobs": [
		["Macintosh was launched in what year?" [1983, 1984, 1985, 1986], 1984],
		["What computer-animated film was produced in 1995 largely on part of Jobs' financial contribution?" ["Lion King", "The Jungle Book", "Toy Story", "A Bug's Life"]],
		["Jobs was mainly Lutheran throughout his lifetime", [true, false], false],
		["The main course at Reed College which drove Jobs to design multiple typefaces on the Mac was", ["Typography", "Caligraphy", "Composition", "Script typeface"]],	
		["Jobs and Wozniak used to attend meetings at the Coffeebrew Computer club" [true, false], false]	
	],
];

//Change the UI according to each question






