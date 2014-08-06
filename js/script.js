$(document).ready(function(){ 
	var timer = setInterval(function(){spectrum()},1200);
	var hue = 0;
	var bool_toggle = false;

	$("#btn_menu").click(function () {
		$("#menu").slideToggle(1000);
		$('#menu').css("background-color", hue);
		
		if (!bool_toggle) {
			clearInterval(timer);
			bool_toggle = true;
		}else {
			timer = setInterval(function(){spectrum()},1200);
			bool_toggle = false;
		};
	});

	function changeText(){
		$("#menu_button").text(function(_, oldText) {
	 	return oldText === 'FERMER' ? 'MENU' : 'FERMER';
	});

	}
	
	function spectrum(){
		hue = 'rgb(' + 251 + ',' + 200 + ',' + (Math.floor(Math.random() * 256)) + ')';
		$('.polymorph').animate( { backgroundColor: hue }, 1000);
	}
});