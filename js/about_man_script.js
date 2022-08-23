$(function () {
  responsive_carousel_horz(".ydr-homme", false, 8000, 15000)
     var boxt
    var boxh  
    var metaScale
    var meta
    var t
    function parallax(){
    
      boxt = $('.ydr-perfum').offset().top
      boxh = $('.ydr-perfum').innerHeight()
      meta = 1 + (scrt - (boxt - winh*0.5 + boxh*0.5)) * 0.01
      $('.ydr-perfum').css({'opacity':meta})

/     $(window).load(function(){
        $(".ydr-collection-water ul").masonry({itemSelector:".ydr-collection-water li"})
    })//loads

      $('.ydr-homme div, .ydr-homme-nav, .ydr-homme-purfume').each(function(){
        t = $(this).offset().top
        if(scrt >= t - winh){
          $(this).addClass('active')
        }else{
          $(this).removeClass('active')
        }//if else
      })//each
    }//fn

  
    parallax()
    $(window).scroll(function(){
      parallax()
    }).resize(function(){
      parallax()
    })  

  

})//ready
