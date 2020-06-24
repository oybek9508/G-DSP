function changeSize(){
  var $winWidth = window.innerWidth
  var $winHeight = window.innerHeight
  if ($winWidth >= $winHeight){
    var $circleSize = $winHeight * 0.85
  } else {
    var $circleSize = $winWidth * 0.85
  }
  $(".Loader").width($circleSize)
  $(".Loader").height($circleSize)
  $(".Loader").css("top",(($winHeight /2) - ($circleSize / 2)))
  $(".Loader").css("left",(($winWidth /2) - ($circleSize / 2)))
  $(".company").css("top",$winHeight * 0.90)
  $(".company").css("left",($winWidth / 2) - 53.5)

}
$(function(){
    var $winWidth = window.innerWidth
    var $winHeight = window.innerHeight
    if ($winWidth >= $winHeight){
      var $circleSize = $winHeight * 0.85
    } else {
      var $circleSize = $winWidth * 0.85
    }
    $(".Loader").width($circleSize)
    $(".Loader").height($circleSize)
  $(".Loader").css("top",(($winHeight /2) - ($circleSize / 2)))
  $(".Loader").css("left",(($winWidth /2) - ($circleSize / 2)))
  $(window).resize(function(){

    if(window.innerWidth > 800){
      changeSize();
    }
    
  })
})


