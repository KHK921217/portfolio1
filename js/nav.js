$(function(){
  
  $('.mbtn').click(function(){
    $('.mbtn').toggleClass('active')
    $('.gnb .lnb').stop().slideToggle(850)
  })

})

