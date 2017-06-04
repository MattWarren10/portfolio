
$(document).ready(function(){

	var totalPrice = 10

	$(".btn-pepperonni").on("click", function(){
		$(".pep").toggle();
		$(".btn-pepperonni").toggleClass("active")
		$(".onni").toggle();
		if ($(".btn-pepperonni").hasClass("active")){
			totalPrice += 1
			$("strong").html("$" + totalPrice)
		
		}
		else {
			totalPrice -= 1
			$("strong").html("$" + totalPrice)
		}
	});
	
		$(".pep").toggle()
		$(".btn-pepperonni").toggleClass("active")
		$(".onni").toggle();
	


	$(".btn-mushrooms").on("click", function(){
		$(".mushroom").toggle();
		$(".btn-mushrooms").toggleClass("active")
		$(".ooms").toggle();
		if ($(".btn-mushrooms").hasClass("active")){
			totalPrice += 1
			$("strong").html("$" + totalPrice)
		
		}
		else {
			totalPrice -= 1
			$("strong").html("$" + totalPrice)
		}
	});
		
		$(".mushroom").toggle()
		$(".btn-mushrooms").toggleClass("active")
		$(".ooms").toggle();
	


	$(".btn-green-peppers").on("click", function(){
		$(".green-pepper").toggle();
		$(".btn-green-peppers").toggleClass("active")
		$(".pers").toggle();
		if ($(".btn-green-peppers").hasClass("active")){
			totalPrice += 1
			$("strong").html("$" + totalPrice)
		
		}
		else {
			totalPrice -= 1
			$("strong").html("$" + totalPrice)
		}
	});

		$(".green-pepper").toggle()
		$(".btn-green-peppers").toggleClass("active")
		$(".pers").toggle();
	
	// $(".sauce-white").hide()
	


	$(".btn-sauce").on("click", function(){
	$(".sauce").toggleClass("sauce-white")
	$(".btn-sauce").toggleClass("active")
	$(".auce").toggle();
	if ($(".btn-sauce").hasClass("active")){
			totalPrice += 3
			$("strong").html("$" + totalPrice)
		
		}
		else {
			totalPrice -= 3
			$("strong").html("$" + totalPrice)
		}
	});


	$(".sauce").toggleClass("sauce-white")
	$(".btn-sauce").toggleClass("active")
	$(".auce").toggle();
	


	$(".btn-crust").on("click", function(){
	$(".crust").toggleClass("crust-gluten-free")
	$(".btn-crust").toggleClass("active")
	$(".rust").toggle();
	if ($(".btn-crust").hasClass("active")){
			totalPrice += 5
			$("strong").html("$" + totalPrice)
		
		}
		else {
			totalPrice -= 5
			$("strong").html("$" + totalPrice)
		}


	});


	$(".crust").toggleClass("crust-gluten-free")
	$(".btn-crust").toggleClass("active")
	$(".rust").toggle();


		





});