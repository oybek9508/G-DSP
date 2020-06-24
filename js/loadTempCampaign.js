function createTempTable(data){
  var $tbody = $("#TempData")
  var $tr = $("<tr>").appendTo($tbody)
  $("<td>").text(data.id).appendTo($tr)
  var $tdWindow = $("<td>").appendTo($tr)
  $("<button>").attr("class","btn window").text("CHECK").val(JSON.stringify(data)).appendTo($tdWindow)
  var $tdExcel = $("<td>").appendTo($tr)
  $("<button>").attr("class","btn excel").text("CHECK").val(JSON.stringify(data)).appendTo($tdExcel)
}
function setEvent(){
  $(".window").on("click",function(e){
    console.log($(this).val())
    var $window = window.open("","new window","width=200,height=100")
    $window.document.write($(this).val())
  })
  $(".excel").on("click",function(e){
    console.log(String($(this).val()))
    $.ajax({
      url : "http://gatewaydsp.koreacentral.cloudapp.azure.com:5000/function/convertExcel",
      method : "post",
      data : {
        convertData : $(this).val()
      },
      success : function(result, status, xhr) {
        var options = {
            fileName: result.id
        };
        var excelPart = [{
          "sheetName" : "sheet1",
          "data" : result
        }]
        console.log(result)
        Jhxlsx.export(excelPart, options);
      },
      error : function(xhr) {
        console.log(xhr.status);
      }
    });
  })
}
$(function(){
    $.ajax({
      url : "http://gatewaydsp.koreacentral.cloudapp.azure.com:5000/campaign/read/temp",
      method : "get",
      success : function(result, status, xhr) {
        $.each(result,function(idx,data){
          createTempTable(data)
        })
        setEvent()
      },
      error : function(xhr) {
        console.log(xhr.status);
      }
    });
})
