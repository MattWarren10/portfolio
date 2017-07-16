var integers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
var inputRGBA = document.getElementsByClassName("rgba");
var inputRange = document.getElementsByClassName("range");
var inputHex = document.getElementById("hex");
var preventEnterKeyButton = document.getElementById("prevent-enter-key");
var getInverseButton = document.getElementById("get-inverse");
var randomColorButton = document.getElementById("random-color");



/*********************RETRIEVES CURRENT BG COLOR*********************/
function bgColorRetrieval() {
  var currentBgColor = document.body.style.backgroundColor.match(/(\d+(\.\d+)?%?)|(\.\d+)/g);
  if (currentBgColor.length === 3) { //fixes alpha channel issue caused by regex
    currentBgColor[3] = 1;
  }
  return currentBgColor;
}



/*********************UPDATES INPUTS*********************/
var update = {
  bodyBgColor: function (bgColor) {
    document.body.style.backgroundColor = "rgba(" + " " + bgColor[0] + ", " + bgColor[1] + ", " + bgColor[2] + ", " + bgColor[3] + ")";
  }, 
  allInputs: function () {
    sendToInputRGBA();
    sendToInputRange();
    rgbaToHex(bgColorRetrieval());
  },
  inputHex: function () {
    sendToInputRGBA();
    sendToInputRange();
  }, 
  inputRGBA: function () {
    sendToInputRange();
    rgbaToHex(bgColorRetrieval());
  },
  inputRange: function () {
    sendToInputRGBA();
    rgbaToHex(bgColorRetrieval());
  },
};




/*********************RETRIEVES RGBA VALUES FROM INPUT TEXT .rgba AND SENDS THEM TO bgColorRetrieval*********************/
var getInputRGBA = function () {
  var sendRGBAToBgColor = new Array();
  for (i=0; i < inputRGBA.length; i++) {
    sendRGBAToBgColor;
    sendRGBAToBgColor.push(inputRGBA[i].value);
  }
getInputRGBA = "getInputRGBA";
update.bodyBgColor(sendRGBAToBgColor);
update.inputRGBA();
}

/*********************SENDS RGBA VALUES FROM BG COLOR TO INPUT TEXT .rgba*********************/
var sendToInputRGBA = function () {
  grabBgColor = bgColorRetrieval();
  if (grabBgColor[3] < 1) {
    grabBgColor[3] = parseFloat(grabBgColor[3]).toFixed(2).slice(1,4); //Limits two decimals and eliminates 0 before decimal
  }
  redInputText.value = grabBgColor[0];
  greenInputText.value = grabBgColor[1];
  blueInputText.value = grabBgColor[2];
  alphaInputText.value = grabBgColor[3]; 
  return grabBgColor;
}



/*********************GETS INPUT RANGE VALUES AND SENDS THEM TO bgColorRetrieval*********************/
var getInputRange = function () {
  var sendRangeToBgColor = new Array();
  for (i=0; i < inputRange.length; i++) {
    sendRangeToBgColor;
    sendRangeToBgColor.push(inputRange[i].value);
  }
  sendRangeToBgColor[3] = sendRangeToBgColor[3]/100;
update.bodyBgColor(sendRangeToBgColor);
update.inputRange();
}



/*********************SEND EACH INDIVIDUAL inputRange ACCORDING TO BG COLOR*********************/
var sendToInputRange = function () {
  grabBgColor = bgColorRetrieval();
  redInputSlider.value = grabBgColor[0];
  greenInputSlider.value = grabBgColor[1];
  blueInputSlider.value = grabBgColor[2];
  alphaInputSlider.value = grabBgColor[3]*100;
  return grabBgColor;
}



/*********************RETRIEVES bgcolor ARRAY AND CONVERTS TO HEX*********************/
 var rgbaToHex = function(rgbaToHex) {
  var rgbaToRGB = new Array(); //Retrieves bgColorRetrieval(); and retrieves conversion from isolatedRGB
  var hexIntegers = new Array(); //Will receive conversion of rgbaToRGB to hex
  for (i=0; i < 3; i++) {
    isolatedRGB = parseInt(rgbaToHex[i]) * parseFloat(rgbaToHex[3]) + 255 * (1 - rgbaToHex[3]);  
    rgbaToRGB.push(isolatedRGB.toFixed(0));
  }
  for (i=0; i < rgbaToRGB.length; i++) {  
    x = rgbaToRGB[i]/16;
    x1 = Math.floor(x);
    x2 = (x - x1) * 16;
    hexIntegers;
    hexIntegers += integers[x1] + integers[x2];         
  }
  inputHex.value = "#" + hexIntegers;
  return rgbaToRGB;
};



/*********************GETS inputHex VALUE AND CONVERTS IT TO RGBA*********************/
var hexToRGBA = function () {
  getInputHex = new Array ();
  x1;
  x2;
  rgbaSix = new Array();
  rgba = new Array();
  for (i=0; i < inputHex.value.length; i++) {
    getInputHex.push(inputHex.value[i]);
    }
  if (getInputHex[0] === "#") {
    getInputHex.splice(0, 1);
  }
  for (i=0; i < getInputHex.length; i++) {
    x1 = 16 * parseInt([integers.indexOf(getInputHex[i])]);
    x2 = parseInt([integers.indexOf(getInputHex[i+1])]);
    rgbaSix.push(x1 + x2);
  }
  rgba.push(rgbaSix[0], rgbaSix[2], rgbaSix[4], "1");
  update.bodyBgColor(rgba);
  update.inputHex();
}

/*********************GETS INVERSE COLOR OF CURRENT BG COLOR*********************/
var getInverseColor = function () {
  colorBeforeInverse = bgColorRetrieval();
  var colorAfterInverse = new Array;
  for (i=0; i<3; i++) {
    var fromStringToInteger = 255 - parseInt(colorBeforeInverse[i]);
    colorAfterInverse.push(fromStringToInteger);
  }
  colorAfterInverse[3] = 1;  
  update.bodyBgColor(colorAfterInverse);
  update.allInputs();
}



/*********************GENERATES RANDOM COLOR VALUE USING RGBA*********************/

 //GRABS A RANDOM NUMBER BETWEEN 0 AND 255
 function getRandomRGB() {
   var randomNumber = Math.floor(Math.random() * 255 );
   return randomNumber;
 }

 //GRABS A RANDOM NUMBER BETWEEN 0 AND 1
 function getRandomAlpha() {
   var decimal = Math.random().toFixed(2);
   return parseFloat(decimal);
 }

 //CONVERTS FUNCTIONS INTO HTML STRING
var rgbaRandomColor = function () {
  var rgba = new Array(); 
  for (i=0; i<3; i++) {
    number = getRandomRGB(); //use for loop to push 3 numbers to a new array       
    rgba.push(number);
   }
  a = getRandomAlpha(); //capture alpha into a new var  
  rgba.push(a); //collects random numbers
  update.bodyBgColor(rgba);
  update.allInputs();
 }

/*********************BROWSER DEFAULTS*********************/

//PREVENTS DEFAULT BROWSER REFRESH UPON CLICK. INVOKED WITHIN ONCLICK ATTR WITHIN HTML TAG
function stopBrowserRefresh (e) {
  e.preventDefault();
}

//PREVENTS DEFAULT BROWSER SETTING FROM SUBMITTING THE FORM USING ENTER KEY
function checkEnter(e){
 e = e || event;
 var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
 return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
}
 


/*********************WIRING*********************/

//Bind each inputRGBA text
do
  {
    var redInputText = inputRGBA[0];
    var greenInputText = inputRGBA[1];
    var blueInputText = inputRGBA[2];
    var alphaInputText = inputRGBA[3];
    var i = 1;
  } while (i<1);

//Bind each inputRange
do
  {
    var redInputSlider = inputRange[0];
    var greenInputSlider = inputRange[1];
    var blueInputSlider = inputRange[2];
    var alphaInputSlider = inputRange[3];
    var i = 1;
  } while (i<1);


//Prevents enter key from getInverseColor to invoke
document.querySelector('form').onkeypress = checkEnter;

//Set input handler to all inputs
redInputText.addEventListener("input", getInputRGBA);
greenInputText.addEventListener("input", getInputRGBA);
blueInputText.addEventListener("input", getInputRGBA);
alphaInputText.addEventListener("input", getInputRGBA);

redInputSlider.addEventListener("input", getInputRange);
greenInputSlider.addEventListener("input", getInputRange);
blueInputSlider.addEventListener("input", getInputRange);
alphaInputSlider.addEventListener("input", getInputRange);

inputHex.addEventListener("input", hexToRGBA);

//Set click handler to buttons
getInverseButton.addEventListener("click", getInverseColor);
randomColorButton.addEventListener("click", rgbaRandomColor);

//UPDATES INPUTS ON WINDOW.LOAD
update.allInputs();



