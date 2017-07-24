
$(document).ready(function(){
	//para el menu hamburguesa
	$(".button-collapse").sideNav();

	//botones con dropdown
	$('.dropdown-button').dropdown({
		hover: true,
		constrainWidth: false,
		belowOrigin: true
	});

	//para el carousel
	$('.slider').slider();
})

