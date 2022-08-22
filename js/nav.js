$(function(){
  

  $('.mbtn').click(function(){
    $('.mbtn').toggleClass('active')
    $('.gnb .lnb').stop().slideToggle(850)
    $('.gnb .lnb-sm>ul>li>ul').stop().slideUp()
    $('.gnb .lnb-sm>ul>li>a').removeClass('active')
  })
  
  $('.lee-header .gnb .lnb-sm>ul>li>a').click(function(e){
    e.preventDefault()
    $('.lee-header .gnb .lnb-sm>ul>li>ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
    $(this).parent().siblings('li').children('a').removeClass('active')
    $(this).toggleClass('active')
  })

})