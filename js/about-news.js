$(function () {
  var sst
  var een
  var rrange
  var vvalue
  var rratio
  var target
      
  var st
  var en
  var range
  var value
  var ratio

  function draw() {
    sst = $('.section-about-news-1 svg').offset().top - winh * 0.5
    een = $('.section-about-news-1').innerHeight() - winh
    rrange = een - sst
    vvalue = scrt - sst
    rratio = vvalue / rrange
    target = 1 - rratio
    if (scrt < sst) {
      $('.section-about-news-1 .path').css('stroke-dashoffset', 1)
    }
    else if (scrt >= sst && scrt < een) {
      $('.section-about-news-1 .path').css('stroke-dashoffset', target)
    }
    else {
      $('.section-about-news-1 .path').css('stroke-dashoffset', 0)
    }

    st=$('.section-about-news-2 svg').offset().top-winh*0.5
    en=$('.section-about-news-2').innerHeight() - winh
    range=en-st
    value=scrt-st
    ratio=value/range
    target= 1-ratio
 
    if(scrt<st){
      $('.section-about-news-2 .path').css('stroke-dashoffset',1)
    }
    else if(scrt>=st && scrt<en){
      $('.section-about-news-2 .path').css('stroke-dashoffset',target)
    }
    else{
      $('.section-about-news-2 .path').css('stroke-dashoffset',0)
    }
  }//fn

  draw()
  $(window).resize(function () {
    draw()
  }).scroll(function () {
    draw()
  })
})