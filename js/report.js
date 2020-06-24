function makeChart($canvas,$dataSet){
  $labels = []
  $.each($dataSet,function(idx,data){
    $labels.push("")
  })
  var myChart = new Chart($canvas, {
    type: 'line',
    borderWidth : 1,
    data: {
      labels : $labels,
      datasets:[{
        label : [{
          display:false
        }],
        borderWidth : 5 ,
        borderColor : ['rgba(0,0,0,0.7)'],
        data : $dataSet,
        fill : false,
      }]
    },
    options: {
        responsive:false,
        legend : {
          display:false
        },
        scales:{
          xAxes:[{
            display:false
          }],
          yAxes:[{
            ticks:{
              beginAtZero : true
            },
            display:false
          }]
        }
    }
  });
}
function overViewSetting(result){
  $(".click").text((result.Clicks).reduce((a , b) => parseInt(a) + parseInt(b)))
  $(".impression").text((result.Impressions).reduce((a , b) => parseInt(a) + parseInt(b)))
  $(".amount").text((result.Cost).reduce((a , b) => parseInt(a) + parseInt(b)))
  $(".CPC").text(result.CostPerConversion[0])
}
$(function(){
    $.ajax({
      url : "http://gatewaydsp.koreacentral.cloudapp.azure.com:5000/report/read",
      data : {
        "startDay" : "2020-05-01",
        "endDay" : "2020-07-01"
      },
      method : "get",
      success : function(result, status, xhr) {
        overViewSetting(result)
        makeChart($('#mainchart1'),result.Clicks)
      },
      error : function(xhr) {
        console.log(xhr.status);
      }
    });
})
