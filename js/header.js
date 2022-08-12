$(function(){
  function headerMotion(){
    scrt = $(window).scrollTop()
    if(scrt >= 0){
      $('.lee-header').addClass('active')
    }else{
      $('.lee-header').removeClass('active')
    }

    if(scrt >= 125){
      $('.lee-header div').addClass('active-bg')
    }else{
      $('.lee-header div').removeClass('active-bg')
    }

  }

  headerMotion()
  $(window).scroll(function(){
    headerMotion()
  }).resize(function(){
    headerMotion()
  })

})