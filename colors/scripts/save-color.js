var saveColorHolder = $("#save-color-holder");
var saveColorButton = $("#save-color");
var selectColorButton = $(".select");
var deleteColorButton = $(".delete");
var clearAllButton = $(".clear-all");
var checkBoxes = $(".ckbx");


//Hide #save-color-holder
var hideSaveColorHolder = function () {
  saveColorHolder.hide();
};



//CREATE NEW COLOR LIST-ITEM
var createListItem = function () {
  saveColorHolder.fadeIn("1000");
  //create each element
  var listItem = $("<li></li>", {class: "color-item"});
  var hexSpan = $("<span></span>", {class: "saved-hex"});
  var rgbaSpan = $("<span></span>", {class: "saved-rgba"});
  var checkBox = $('<input type="checkbox" class="ckbx">');
  //Set background color of list-item
  listItem.css("backgroundColor", 'rgba(' + inputRGBA[0].value +', ' + inputRGBA[1].value + ', ' + inputRGBA[2].value + ', ' + inputRGBA[3].value + ')');
  
  //Display HEX text with "#" if included or not
  hexSpan.text(function () {
    getInputHex = inputHex.value;
    if (getInputHex[0] === "#") {
      return getInputHex;
    }
    else {
      return "#" + getInputHex;
    };
  });

  //Display RGBA text
  rgbaSpan.text('rgba(' + inputRGBA[0].value +', ' + inputRGBA[1].value + ', ' + inputRGBA[2].value + ', ' + inputRGBA[3].value + ')');

  //Append all items
  $("ul").append(listItem);
  $(listItem).append(hexSpan);
  $(listItem).append(rgbaSpan);
  $(listItem).append(checkBox);

  //Hide ckbx
  $(".ckbx").hide();

  //Retrieve Current BG Color
  var getRGB = function () {
    y = rgbaToHex(bgColorRetrieval()); 
    return y 
  };

  //Calculate YIQ value 
  var yiq = function (rgb) {
    yiqValue = parseInt((rgb[0] * .299) + (rgb[1] * .587) + (rgb[2] * .114));
    setSpanTextColor(yiqValue);
  };

  //Set span text color to black if > 128 and white if less than 128
  var setSpanTextColor = function (number) {
    if (number >= 128) {
      $("li").last().css("color", "#444");
    } else if (number < 128) {
      $("li").last().css("color", "#dadada");
    }
  };

  //Invoke 
  yiq(getRGB());

  //Switch delete and cancel classes back to select and clear-all
  if ($(".delete").hasClass("delete") ){
    $(".delete").toggleClass("select", true).toggleClass("delete", false).text("Select");
    $(".cancel").toggleClass("clear-all", true).toggleClass("cancel", false).text("Clear All");
    $(".ckbx").hide();
  };
}; //END createListItem




//TOGGLE LIST ITEMS DEPENDING ON USER INTERACTION
var toggleListItems = function () {
  if ($(".select").hasClass("select") ) {  
    $(".select").toggleClass("delete", true).toggleClass("select", false).text("Delete");
    $(".clear-all").toggleClass("cancel", true).toggleClass("clear-all", false).text("Cancel");
    $(".ckbx").show();
  } 
  else if ($(".delete").hasClass("delete") && $(":checked").length === 0){
    $(".delete").toggleClass("select", true).toggleClass("delete", false).text("Select");
    $(".cancel").toggleClass("clear-all", true).toggleClass("cancel", false).text("Clear All");
    $(".ckbx").hide();
  }
  else if ($(".delete").hasClass("delete") && $(":checked")) {
    $("input:checkbox:checked").parent().remove();
      if ($("ul").children().length === 0) {
        saveColorHolder.fadeOut("1000");
      }
  }
  else if ($(".cancel").hasClass("cancel") && $(":checked").length === 0){
     $(".ckbx").hide();
  }
};



//CLEARS ALL ITEMS OR CANCELS REQUEST TO DELETE
var clearAllItems = function () {  
  if ($(".clear-all").hasClass("clear-all") && $("ul").children().length !== 0) {
    $("ul").empty();
    saveColorHolder.fadeOut("1000");
  }
  else if ($(".cancel").hasClass("cancel")) {
    $(".delete").toggleClass("select", true).toggleClass("delete", false).text("Select");
    $(".cancel").toggleClass("clear-all", true).toggleClass("cancel", false).text("Clear All");
    $(".ckbx").hide();
    saveColorHolder.show();
  }
};

//WIRING

$(document).ready(hideSaveColorHolder);

saveColorButton.click(function (event) {
  event.preventDefault();
  createListItem();
  location.href='#save-color-holder';
});


selectColorButton.click(toggleListItems);
clearAllButton.click(clearAllItems);






//Add animation