$(function () {
     var boxt
    var boxh  
    var metaScale
    var meta
    var metaY
    function parallax(){
    
      boxt = $('.ydr-perfum').offset().top
      boxh = $('.ydr-perfum').innerHeight()
      meta = 1 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.01
      $('.ydr-perfum').css({'opacity':meta})


   /*   $('.ydr-homme div').each(function(){
        boxt = $(this).offset().top
        boxh = $(this).innerHeight()
        metaScale = 1 + Math.abs(scrt - (boxt - winh*0.5 + boxh*0.5)) * -0.002
        if(metaScale < 0){metaScale = 0}
        $(this).children('a').css({'transform':'scale('+metaScale+')'})
        metaY = 0 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.15
        $(this).find('img').css({'transform':'translateY('+metaY+'px) scale(1.1)'})
   
      })//each */

    }//fn
  
    parallax()
    $(window).scroll(function(){
      parallax()
    }).resize(function(){
      parallax()
    }) 

})//ready
