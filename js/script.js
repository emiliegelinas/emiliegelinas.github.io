$(document).ready(function(){ 
/*	var timer = setInterval(function(){spectrum()},1200);
	var hue = 0;
	var bool_toggle = false;*/

	/* ============== Menu ============== */
	$("#btn_menu").click(function () {
		changeText();
		$("#menu").slideToggle(600);
		$('#menu').css("background-color", hue);
		
		if (!bool_toggle) {
			clearInterval(timer);
			bool_toggle = true;
		}else {
			timer = setInterval(function(){spectrum()},1200);
			bool_toggle = false;
		};
	});

	/* ============== Change menu text ============== */
	function changeText(){
		$("#menu_button").text(function(_, oldText) {
	 		return oldText === 'FERMER' ? 'MENU' : 'FERMER';
		});
	}

	/* ============== Text icons hover ============== */
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

	/* ============== Icons hover ============== */
	$("#icon_web").hover(function (){
		$("#icon_web").attr("src","img/web_icon_over.png");
	});

	$("#icon_web").mouseout(function (){
		$("#icon_web").attr("src","img/web_icon.png");
	});

	$("#icon_graphic").hover(function (){
		$("#icon_graphic").attr("src","img/graphic_icon_over.png");
	});

	$("#icon_graphic").mouseout(function (){
		$("#icon_graphic").attr("src","img/graphic_icon.png");
	});

	$("#icon_illustration").hover(function (){
		$("#icon_illustration").attr("src","img/illustration_icon_over.png");
	});

	$("#icon_illustration").mouseout(function (){
		$("#icon_illustration").attr("src","img/illustration_icon.png");
	});	



	/* ============== Spectrum ============== */
	
	/*function spectrum(){
		hue = 'rgb(' + 251 + ',' + 200 + ',' + (Math.floor(Math.random() * 256)) + ')';
		$('.polymorph').animate( { backgroundColor: hue }, 10000);
	}*/
});