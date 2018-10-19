$(document).ready(function(){$(".callMasters").submit(function(){var t=$(this).serialize(),e=(new Date).toString().split(" "),n=e[e.length-2]+" "+e[e.length-1];return $.ajax({type:"post",url:"../send.php?timeZone="+n,data:t,success:function(t){dataLayer.push({'event': 'formsend'});},error:function(){alert("error")}}),!1})});


$('.btn_more').click(function() {
    $('.hiddenblock').fadeIn(300);
   
});