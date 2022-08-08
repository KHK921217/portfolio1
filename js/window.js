$(function(){
  function getWinIfo(){
    scrt = $(window).scrollTop()/* 공통으로 같이 써야하는 변수는 변수를 사용하지 말것. */
    scrl = $(window).scrollLeft()
    winw = $(window).width()
    winh = $(window).height()
    doch = $(document).height()
  }//fn getWinIfo

  getWinIfo()
  $(window).resize(function(){
    getWinIfo()
  }).scroll(function(){
    getWinIfo()
  })//window event
})//ready