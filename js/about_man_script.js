$(function(){

  var boxt
  var boxh
  var metaY
 
  function parallax(){
    $('.ydr-parallax-li').each(function(){
      boxt = $(this).offset().top
      boxh = $(this).innerHeight()
      metaScale = 1 + Math.abs(scrt - (boxt - winh*0.5 + boxh*0.5)) * -0.0008
      if(metaScale < 0){metaScale = 0}
      $(this).children('a').css({'transform':'scale('+metaScale+')'})
      metaY = 0 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.2
      $(this).find('img').css({'transform':'translateY('+metaY+'px) scale(1)'})

      if(scrt >= boxt - winh * 0.8){
        $(this).addClass('active')
      }else{
        $(this).removeClass('active')
      }
    })//each

    boxt = $('.ydr-perfum').offset().top
    boxh = $('.ydr-perfum').innerHeight()
    meta = 1 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.01
    $('.ydr-perfum').css({'opacity':meta})

    boxt = $('.ydr-figure-img1').offset().top
    boxh = $('.ydr-figure-img1').innerHeight()
    meta = 1 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.01
    $('.ydr-figure-img1').css({'opacity':meta})

    boxt = $('.ydr-figure-img2').offset().top
    boxh = $('.ydr-figure-img2').innerHeight()
    meta = 1 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.01
    $('.ydr-figure-img2').css({'opacity':meta})


  }//fn

  parallax()
  $(window).scroll(function(){
    parallax()
  }).resize(function(){
    parallax()
  })

})//ready
