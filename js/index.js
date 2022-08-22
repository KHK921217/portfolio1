$(function () {

  /* noise effect------------------------------------------- */
  var options = {
    "animate": true,
    "patternWidth": 100,
    "patternHeight": 100,
    "grainOpacity": 0.61,
    "grainDensity": 1.99,
    "grainWidth": 2.39,
    "grainHeight": 2.49
  };
  grained('#kh-noise', options)
  /* ripple effect-------------------------------------------- */
  $('.kh-intro-section2').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
  /* sectioin2 bubble */
  bubble('.bubble-container', './img/bubble')

  /* scrollspy------------------------- */
  function scrollSpy() {

    var offset1 = $('.kh-intro-section1').offset().top
    var offset2 = $('.kh-intro-section2').offset().top
    var offset3 = $('.kh-intro-section3').offset().top
    var section = $()

    if (scrt < offset2) {
      section = 1
    } else if (scrt >= offset2 && scrt < offset3) {
      section = 2
    } else {
      section = 3
    }

    $('.kh-intro-scrollspy button').removeClass('active')
    $('.kh-intro-scrollspy .kh-index-btn' + section).addClass('active')

  }//fn

  scrollSpy()
  $(window).resize(function () {
    scrollSpy()
  }).scroll(function () {
    scrollSpy()
  })//windowevetn

  $('.kh-intro-scrollspy button').click(function () {
    var n = $(this).attr('data-n')
    var target = $('.kh-intro-section' + n).offset().top
    $('body,html').stop().animate({ "scrollTop": target }, 500)
  })//click

  /* section parallax--------------------------------------- */
  var scrH = winh *3.3333
  var scrollStart
  var scrollEnd
  var scrollRange
  var scrollRatio
  var sectionNumber
  var metaStart
  var metaEnd
  var metaRange
  var meta
  var opacity
  

  /* 클론 */
  $('.home-section-container').each(function () {
    $(this).find('.kh-intro-section-org').clone().removeClass('kh-intro-section-org').addClass('kh-intro-section-clone').appendTo($(this))
  })
  
  function callBack() { 
    $('.home-section-container').each(function () { 
      sectionNumber = $(this).attr('data-n')
      scrollStart = (sectionNumber - 2) * scrH
      scrollEnd = (sectionNumber - 1) * scrH
      scrollRange = scrollEnd - scrollStart
      scrollRatio = (scrt - scrollStart) / scrollRange
      if (scrollRatio < 0) scrollRatio = 0; if (scrollRatio > 1) scrollRatio = 1
      metaStart = 0
      metaEnd = 50
      metaRange = metaEnd - metaStart
      meta = metaStart + metaRange * scrollRatio

      opacity = 1 - scrollRatio*0.5
      scale = 1 - scrollRatio*0.5
      $(this).prev().css({'opacity':opacity,'transform':'scale('+scale+')'})

      if (window.matchMedia('(orientation:landscape)').matches) {
        $(this).children('.kh-intro-section-org').css({
          'clip-path': 'polygon(0 0, '+meta+'% 0, '+meta+'% 100%, 0 100%)' //2,3 : 50 ->  0
        })
        $(this).children('.kh-intro-section-clone').css({
          'clip-path': 'polygon('+(100-meta)+'%  0, 100% 0, 100% 100%,'+(100-meta)+'% 100%)' ,//1,4 : 50-> 100 
        })
      } else {
        $(this).children('.kh-intro-section-org').css({
          'clip-path': 'polygon(0 0, 100% 0, 100% '+meta+'%, 0 '+meta+'%)' //3,4 : 50 -> 0 
        })
        $(this).children('.kh-intro-section-clone').css({
          'clip-path': 'polygon(0% '+(100-meta)+'%, 100% '+(100-meta)+'%, 100% 100%, 0% 100%)'//1,2 : 50 -> 100
        })
      }//if media
      
    })//each
  }//fn

  callBack()
  $(window).resize(function () {
    callBack()
  }).scroll(function () {
    callBack()
  })

  var timeoutID
  $('.kh-intro-scrollspy button').click(function(){
    var n = $(this).attr('data-n')
    isSmoothScroll = false
    $('body,html').stop().animate({'scrollTop': (n-1) * scrH },500,function(){
      clearTimeout(timeoutID)
      timeoutID = setTimeout(function(){
        isSmoothScroll = true
      },100)
    }) 
  })
})//ready

