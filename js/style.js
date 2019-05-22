//toggle button
$(document).ready(function(){
  $("#btn").hover(function(){
    $("#btn-p").toggle("slow");
  });

$(".meText").click(function(){
    $("img").fadeIn( "slow", "linear" );
    });
    //mouse event handler
    $(function(){
      $(".myCool").mouseenter(function(event){
        $(this).addClass("wrappedElement");
      });
      $(".myCool").mouseleave(function(event){
        $(this).removeClass("wrappedElement");
      })
    })
});
