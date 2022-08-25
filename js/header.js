$(function () {
  var tog = -1
  var timeoutID
  var morph = new TimelineLite({ paused: true });
  morph.to(".rect_poly", 0.3, { morphSVG: ".zigzag_poly", fill: "#FFF", ease: Linear.easeNone })

  $('.mbtn').click(function () {
    $(this).toggleClass("active")
    tog = -tog
    $('.gnb').stop().fadeToggle()
    $('.gnb .menu').toggleClass("active")
    clearTimeout(timeoutID)
    if (tog == 1) {
      timeoutID = setTimeout(function () {
        morph.play();
      }, 1000)
    } else {
      morph.reverse();
    }
    $(".gnb  ul > li > ul").stop().slideUp()
    $(".gnb h3").removeClass("active")
  })

  $(".gnb h3").click(function () {
    $(this).parent().siblings("li").children("h3").removeClass("active")
    $(this).toggleClass("active")
    $(".gnb  ul > li > ul").stop().slideUp()
    $(this).siblings("ul").stop().slideToggle()
  })
})//ready