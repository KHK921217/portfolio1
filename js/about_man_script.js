$(function(){
 var meta
  var boxt
  var boxh
  function parallax(){
    boxt = $('.ydr-perfum').offset().top
    boxh = $('.ydr-perfum').innerHeight()
    meta = 1 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.01
    $('.ydr-perfum').css({'opacity':meta})
 
  }//fn

  parallax()
  $(window).resize(function(){
    parallax()
  }).scroll(function(){
    parallax()
  })
})//ready
