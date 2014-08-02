$(document).ready(function(){ 

  $("#btn_menu").click(function () {
    $("#menu").slideToggle(1000);
  });

  function changeText(){
     $("#menu_button").text(function(_, oldText) {
         return oldText === 'FERMER' ? 'MENU' : 'FERMER';
     });
  }

});