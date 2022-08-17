$(function(){

  var boxt
  var boxh
  var metaY
  function parallax(){
    $('.ydr-parallax li').each(function(){
      boxt = $(this).offset().top
      boxh = $(this).innerHeight()
      metaY = 0 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.15
      $(this).find('li').css({'transform':'translateY('+metaY+'px)'})

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
