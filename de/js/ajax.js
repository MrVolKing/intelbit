$(document).ready(function(){$(".callMasters").submit(function(){var t=$(this).serialize(),e=(new Date).toString().split(" "),n=e[e.length-2]+" "+e[e.length-1];return $.ajax({type:"post",url:"../send.php?timeZone="+n,data:t,success:function(t){dataLayer.push({'event': 'formsend'});},error:function(){alert("error")}}),!1})});


                                                    // custom script to hidden/visible blocks
                                        // кнопки переключения дизайн\сайт

$('.btn2').click(function() {
    $('.btn2').addClass('active');
    $('.btn1').removeClass('active');
    $('.design').fadeIn(300).css('display', 'flex');
    $('.pages').css('display', 'none');
    $('.btn_morepages').css('display', 'none');
    $('.btn_moredesign').css('display', 'block');
    $('.hiddenblockdesign').css('display', 'none');
    $('.hiddenblockdesign2').css('display', 'none');
    $('.hiddenblockdesign3').css('display', 'none');

    
});

$('.btn1').click(function() {
    $('.btn1').addClass('active');
    $('.btn2').removeClass('active');
    $('.design').css('display', 'none');
    $('.pages').fadeIn(300).css('display', 'flex');
    $('.hiddenblockpages').css('display', 'none');
    $('.hiddenblockpages2').css('display', 'none');
    $('.btn_morepages').css('display', 'block');
    $('.btn_moredesign').css('display', 'none');
    
});


                                                // кнопки больше проектов
var clicks = 0;

$('.btn_morepages').click(function() {
    if (clicks === 0){
        $('.hiddenblockpages').fadeIn(300);
    } else if(clicks === 1){
        $('.hiddenblockpages2').fadeIn(300);
    } else{
        $('.hiddenblockpages').fadeIn(300);
        $('.hiddenblockpages2').fadeIn(300);
    }
    clicks++;
});

var clicks_design = 0;

$('.btn_moredesign').click(function() {
    if (clicks_design === 0){
        $('.hiddenblockdesign').fadeIn(300);
    } else if(clicks_design === 1){
        $('.hiddenblockdesign2').fadeIn(300);
    } else{
        $('.hiddenblockdesign3').fadeIn(300);
    }
    clicks_design++;
    
});


                                                    // кнопки вызывающие попапы на недоделанные сайты
                                            
$('.btn_notbuildpages').click(function() {
    $('.notbuildpopap').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.notbuildpopap').click(function() {
    $('.notbuildpopap').fadeIn(300).css('display', 'none');
    $('body').css('overflow','visible');
    
});

                                                        // popaps ful design

                                                        
$('.btn_popapdesign_1').click(function() {
    $('.popap1').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap1').click(function() {
    $('.popap1').css('display', 'none');
    $('body').css('overflow','visible');
    
});





$('.btn_popapdesign_2').click(function() {
    $('.popap2').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap2').click(function() {
    $('.popap2').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_3').click(function() {
    $('.popap3').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap3').click(function() {
    $('.popap3').css('display', 'none');
    $('body').css('overflow','visible');
    
});



$('.btn_popapdesign_4').click(function() {
    $('.popap4').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap4').click(function() {
    $('.popap4').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_5').click(function() {
    $('.popap5').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap5').click(function() {
    $('.popap5').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_6').click(function() {
    $('.popap6').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap6').click(function() {
    $('.popap6').css('display', 'none');
    $('body').css('overflow','visible');
    
});


$('.btn_popapdesign_7').click(function() {
    $('.popap7').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap7').click(function() {
    $('.popap7').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_8').click(function() {
    $('.popap8').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap8').click(function() {
    $('.popap8').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_9').click(function() {
    $('.popap9').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap9').click(function() {
    $('.popap9').css('display', 'none');
    $('body').css('overflow','visible');
    
});


$('.btn_popapdesign_10').click(function() {
    $('.popap10').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap10').click(function() {
    $('.popap10').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_11').click(function() {
    $('.popap11').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap11').click(function() {
    $('.popap11').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_12').click(function() {
    $('.popap12').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap12').click(function() {
    $('.popap12').css('display', 'none');
    $('body').css('overflow','visible');
    
});


$('.btn_popapdesign_13').click(function() {
    $('.popap13').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap13').click(function() {
    $('.popap13').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_14').click(function() {
    $('.popap14').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap14').click(function() {
    $('.popap14').css('display', 'none');
    $('body').css('overflow','visible');
    
});

$('.btn_popapdesign_15').click(function() {
    $('.popap15').fadeIn(300).css('display', 'flex');
    $('body').css('overflow','hidden');
    
});

$('.popap15').click(function() {
    $('.popap15').css('display', 'none');
    $('body').css('overflow','visible');
    
});