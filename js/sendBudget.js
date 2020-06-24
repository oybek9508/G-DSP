var globalJson = {}

$(window).on("load",function(){
  var $menu = $("#campaign_menu").contents()
  var $aside = $("#campaign_aside").contents();
  var $content = $("#campaign_content").contents();
  $menu.find("#saveData").on("click",function(e){
    var $budgetData = new FormData($content.find("#budgetForm")[0])
    $budgetData.append("username","test")
    $budgetData.append("tempID",20)
    $.ajax({
			url : "http://gatewaydsp.koreacentral.cloudapp.azure.com:5000/campaign/create/temp",
			method : "post",
			data : $budgetData,
      contentType: false,
      processData: false,
			success : function(result) {
				alert("Temprary save successded")
			},
			error : function(xhr) {
				alert("Temprary save failed")
			}
		})
  })
});
