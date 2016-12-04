$(document).ready(function(){
  // $("body").hide();
  // $("body").fadeIn();
  $(".header-content").hide();
  $(".header-content").fadeIn(1000);

  $(".book-scrool").draggable({
    scroll:true,
    start: function(){
      $(this).data("startingScrollTop",$(this).parent().scrollTop());
    },
    drag: function(event,ui){
      var st = parseInt($(this).data("startingScrollTop"));
      ui.position.top -= $(this).parent().scrollTop() - st;
    }
  });

});
