// $('.carousel').carousel({
//   interval: 4000
// });

$(".prep").click(function(){
	$('#prep').addClass("active");
	$('.prep').addClass("active");
	$('#source').removeClass("active");
	$('.source').removeClass("active");
	$('#features').removeClass("active");
	$('.features').removeClass("active");
});

$(".features").click(function(){
	$('#prep').removeClass("active");
	$('.prep').removeClass("active");
	$('#source').removeClass("active");
	$('.source').removeClass("active");
	$('#features').addClass("active");
	$('.features').addClass("active");
});

$(".source").click(function(){
	$('#prep').removeClass("active");
	$('.prep').removeClass("active");
	$('#source').addClass("active");
	$('.source').addClass("active");
	$('#features').removeClass("active");
	$('.features').removeClass("active");
});

