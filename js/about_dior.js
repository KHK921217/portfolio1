$(function(){
    var meta
    var boxt
    var boxh
    function parallax(){

    boxt=$('.kh-left-box2 figure','.kh-right-box figure',
    '.kh-left-box figure').each(function(){
      boxt=$(this).offset().top
      both=$(this).innerHeight()
      meta=0 + (scrt-(boxt-winh*0.5-boxh*0.5))*0.1
      $(this).children('img').css({'transform':'scale(1.4) translateY('+meta+'px)'})
      })//each

    }//fn
  
  parallax()
  $(window).resize(function(){
    parallax()
  }).scroll(function(){
    parallax()
  })
//------pallarx------

function khscrMotion(){
  $('.kh-point ul li').each(function(){
    var t=$(this).offset().top
    if(scrt>=t-winh){
      $(this).addClass('active')
    }else{
      $(this).removeClass('active')
    }//if else
  })
}//fn

khscrMotion()
$(window).resize(function(){
  khscrMotion()
}).scroll(function(){
  khscrMotion()
})















})//ready