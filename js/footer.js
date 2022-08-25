$(function(){

  $('.sitemap>ul>li>a').click(function(){
    $('.sitemap>ul>li>ul').stop().slideUp()      
    $(this).siblings('ul').stop().slideToggle()
    $(this).parent().siblings('li').children('a').removeClass('active')
    $(this).toggleClass('active')
    return false
  })

})