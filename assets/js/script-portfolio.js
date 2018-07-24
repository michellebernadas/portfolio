$(document).ready(function(){
	$('.header-text h3.left').click(function(){
		$('.about').animate({
			top:0}, 500)
	})

	$('button.icon').click(function(){
		$('.about').animate({
			top:"-200%"}, 500)
	})

	$('h3.right').click(function(){
		$('.contact').animate({
			top:0
		})
	})

	$('button.icon').click(function(){
		$('.contact').animate({
			top:"-200%"
		})
	})

	$('.footer-text h3.left').click(function(){
		$('.skills').animate({
			bottom:0
		})
	})

	$('button.icon').click(function(){
		$('.skills').animate({
			bottom:"200%"
		})
	})

	$('.footer-text h3.right').click(function(){
		$('.works').animate({
			bottom:0
		})
	})

	$('button.icon').click(function(){
		$('.works').animate({
			bottom:"200%"
		})
	})


	$(window).on("load", function(){
		$('.header-text h3').fadeIn(2000);
		$('.footer-text h3').fadeIn(2000);
		$('.body-div img').fadeToggle(500);
		
	})

	$(window).on("load", function(){
		$('.body-div img').fadeIn(2000);
	})



});