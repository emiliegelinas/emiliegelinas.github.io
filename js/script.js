$(document).ready(function(){ 
/*	var timer = setInterval(function(){spectrum()},1200);
	var hue = 0;
	var bool_toggle = false;*/	

	/* ============== Menu ============== */
	$("#btn_menu").click(function () {
		$("#menu").slideToggle(1000);
		//$('#menu').css("background-color", hue);
		
		/*if (!bool_toggle) {
			clearInterval(timer);
			bool_toggle = true;
		}else {
			timer = setInterval(function(){spectrum()},1200);
			bool_toggle = false;
		};*/
	});

	/* ============== Icons hover ============== */
	$(".icon").mouseover(function (){
		$("#text_icon").fadeIn(1);
	});	

	$(".icon").mouseout(function (){
		$("#text_icon").fadeOut(1);
	});	

	$("#icon_web").hover(function (){
		$("#text_icon").html('design web');
	});

	$("#icon_graphic").hover(function (){
		$("#text_icon").html('design graphique');
	});

	$("#icon_illustration").hover(function (){
		$("#text_icon").html('illustration');
	});	

	/* ============== Change menu text ============== */
	function changeText(){
		$("#menu_button").text(function(_, oldText) {
	 	return oldText === 'FERMER' ? 'MENU' : 'FERMER';
	});

	}
	/* ============== Spectrum ============== */
	/*
	function spectrum(){
		hue = 'rgb(' + 251 + ',' + 200 + ',' + (Math.floor(Math.random() * 256)) + ')';
		$('.polymorph').animate( { backgroundColor: hue }, 1000);
	}*/
});