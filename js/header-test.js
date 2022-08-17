$(function(){
  function headerMotion(){
    scrt = $(window).scrollTop()
    if(scrt > 0){
      $('.lee-header').addClass('active')
    }else{
      $('.lee-header').removeClass('active')
    }

    if(scrt >= 125){
      $('.lee-header .gnb').addClass('active-bg')
      $('.search-area').addClass('active-sr')
    }else{
      $('.lee-header .gnb').removeClass('active-bg')
      $('.search-area').removeClass('active-sr')
    }

  }

  headerMotion()
  $(window).scroll(function(){
    headerMotion()
  }).resize(function(){
    headerMotion()
  })

})