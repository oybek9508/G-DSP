function createBar(){
  var $dataArray = ["Link click","Reach","Impressions","Link_clicks"]
  var $pBar = $("<div>").attr("class","pBar").appendTo("#sample")
    var $pBar_top = $("<div>").attr("class","pBar_top").appendTo($pBar)
      var $pBar_top_left = $("<div>").attr("class","pBar_top_left").appendTo($pBar_top)
        $("<img>").attr("class","pBar_logo").attr("src","../../img/default_icon/human.svg").appendTo($pBar_top_left)
        var $pBar_title = $("<div>").attr("class","pBar_title").appendTo($pBar_top_left)
          $("<span>").attr("class","pBar_title_name").text("Project Name_날짜").appendTo($pBar_title)
          $("<br>").appendTo($pBar_title)
          $("<span>").attr("class","pBar_title_id").text("ID:234234234325").appendTo($pBar_title)
      var $pBar_top_right = $("<div>").attr("class","pBar_top_right").appendTo($pBar_top)
        for (var $col in $dataArray){
          var $info = $("<div>").attr("class","pBar_info").appendTo($pBar_top_right)
            var $info_data = $("<div>").attr("class","pBar_info_data").appendTo($info)
              $("<span>").text(0).appendTo($info_data)
              $("<span>").text("▲").appendTo($info_data)
              $("<span>").text("+30.5%").appendTo($info_data)
            var $info_title = $("<div>").attr("class","pBar_info_title").appendTo($info)
              $("<span>").text($dataArray[$col]).appendTo($info_title)
        }
        $("<span>").attr("class","pBar_dDay topDay").text("D - 39").appendTo($pBar_top_right)
        $("<img>").attr("class","more_button").val(0).attr("src","/img/more_open.svg").appendTo($pBar_top)
    var $pBar_bottom = $("<div>").attr("class","pBar_bottom").appendTo($pBar)
      for (var $col in $dataArray){
        var $more_info = $("<div>").attr("class","pBar_more_info").appendTo($pBar_bottom)
          var $info = $("<div>").attr("class","pBar_info").appendTo($more_info)
            var $info_data = $("<div>").attr("class","pBar_info_data").appendTo($info)
              $("<span>").text(0).appendTo($info_data)
              $("<span>").text("▲").appendTo($info_data)
              $("<span>").text("+30.5%").appendTo($info_data)
            var $info_title = $("<div>").attr("class","pBar_info_title").appendTo($info)
              $("<span>").text($dataArray[$col]).appendTo($info_title)
          var $graph = $("<div>").attr("class","pBar_graph").appendTo($more_info)
            $("<canvas>").attr("id",$dataArray[$col] + "_chart").attr("class","pBar_graph").appendTo($graph)
      }
      $("<span>").attr("class","pBar_dDay botDay").text("D - 40").appendTo($pBar_bottom)
}
function setEvent(){
  $(".more_button").on("click",function(e){
    if($(this).val() == 0){
      $(this).closest(".pBar").children(".pBar_top").children(".pBar_top_right").css("display","none")
      $(this).closest(".pBar").css("height","230px")
      $(this).closest(".pBar").children(".pBar_bottom").css("display","block")
      $(this).attr("src","/img/more_close.svg")
      $(this).val(1)
    } else {
      $(this).closest(".pBar").children(".pBar_top").children(".pBar_top_right").css("display","block")
      $(this).closest(".pBar").css("height","56px")
      $(this).closest(".pBar").children(".pBar_bottom").css("display","none")
      $(this).attr("src","/img/more_open.svg")
      $(this).val(0)
    }
  })
}
$(function(){
  createBar()
  createBar()
  setEvent()
})
