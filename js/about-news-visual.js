$(function () {
  var img_n = 1
  var title_n = 1
  var img_length = $(".about_news_visual .img_container li").size()
  var ease1 = "easeInQuint" // slideUpDown ease
  var img_duration = 1000 //slideUpDown speed
  var ease2 = "easeInOutBack" // title move ease
  var title_duration = 500//slideUpDown speed
  var title_delay_gap = 200
  var title_delay
  var dir = "next" // change direction
  var obj_h //img height
  var reset = false // title reset position
  var flag = true
  var flag_delay = title_delay_gap * img_length + title_duration
  var intervalID
  var interval_delay = flag_delay + 2000
  var timeoutID
  var timeout_delay = interval_delay + 5000

  $(".about_news_visual .imgbox1").clone().attr("class", "imgbox" + (img_length + 1)).appendTo(".about_news_visual .img_container")
  $(".about_news_visual .imgbox" + img_length).clone().attr("class", "imgbox0").prependTo(".about_news_visual .img_container")
  $(".about_news_visual .imgbox1").css("z-index", "2")
  $(".about_news_visual .imgbox2").css("z-index", "1")
  $(".about_news_visual sub").text(img_length)
  for (i = 1; i <= img_length; i++) {
    $(".about_news_visual .title_container .title" + i).css({ "top": 50 + (i - 1) * 50 + "%", "left": 50 + (i - img_n) * 50 + "%" })
  }//for
  $(".about_news_visual .title_container li").removeClass("acitve")
  $(".about_news_visual .title_container .title" + 1).removeClass("acitve")

  set_img_size()

  $(window).resize(function () {
    set_img_size()
  })//fn

  function set_img_size() {
    obj_h = $(".about_news_visual .img_container").height()
    $(".about_news_visual .img_container img").height(obj_h)
  }//fn motion

  auto_play()

  function auto_play() {
    $(".about_news_visual .progress span").stop().css("width", "0")
    $(".about_news_visual .progress span").stop().animate({ "width": "100%" },interval_delay)
    intervalID = setInterval(function () {
      $(".about_news_visual .progress span").stop().css("width", "0")
      $(".about_news_visual .progress span").stop().animate({ "width": "100%" },interval_delay)
      img_n++; title_n++
      change()
    }, interval_delay)//setInterval
  }//fn

  function auto_play_reset(){
    $(".about_news_visual .progress span").stop().css("width", "0")
    clearInterval(intervalID)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function(){
      auto_play()
    },timeout_delay)//timeoutID
  }//fn

  function change_title() {
    if (title_n < 1) { title_n = img_length; reset = true }
    if (title_n > img_length) { title_n = 1; reset = true }
    for (i = 1; i <= img_length; i++) {
      if (reset == true) {
        if (title_n == 1) {//5 -> 1
          title_delay = (img_length - i) * title_delay_gap
        } else {//1 -> 5
          title_delay = (i - 1) * title_delay_gap
        }//if title n
      } else {//ordinary
        if (dir === "next") {
          title_delay = ((i + 2) - title_n) * title_delay_gap
        } else {
          title_delay = (title_n - (i - 2)) * title_delay_gap
        }//if title n
      }//reset
      $(".about_news_visual .title_container .title" + i).stop().delay(title_delay)
        .animate({ "top": 50 + (i - title_n) * 50 + "%", "left": 50 + (i - title_n) * 50 + "%" }, title_duration, ease2)
    }
    $(".about_news_visual .title_container li").removeClass("acitve")
    $(".about_news_visual .title_container .title" + title_n).removeClass("acitve")
    reset = false
  }//fn

  function change() {
    change_img()
    change_title()
    change_text()
    change_digits()
    setTimeout(function () {//reset position
      flag = true
    }, flag_delay)//timeout total_duration=animation-duration + title_delay*2 + user_time
  }//change

  function change_text() {
    $(".about_news_visual .text_container").stop().animate({ "top": (title_n - 1) * -100 + "%" }, 1000)
    $(".about_news_visual sup").text(title_n)
  }//fn

  function change_digits() {
    $(".about_news_visual .digits2").stop().animate({ "top": Math.floor(title_n / 10) * -100 + "%" })
    $(".about_news_visual .digits2").stop().animate({ "top": (title_n - 1) * -100 + "%" })
  }//fn


  function change_img() {
    if (dir == "next") {//next n++
      $(".about_news_visual .img_container li").css({ "z-index": "auto", "height": "100%", "top": "0", "bottom": "auto" })
      $(".about_news_visual .img_container li img").css({ "top": "0", "bottom": "auto" })
      $(".about_news_visual .img_container .imgbox" + img_n).prev("li").css("z-index", "2")
      $(".about_news_visual .img_container .imgbox" + img_n).css("z-index", "1")
      $(".about_news_visual .img_container .imgbox" + img_n).prev("li").stop().animate({ "height": 0 }, img_duration, ease1, function () {
        if (img_n > img_length) {
          img_n = 1;
        }//if

      })//animation
    } else {//prev n--
      $(".about_news_visual .img_container li").css({ "z-index": "auto", "height": "100%", "top": "auto", "bottom": "0" })
      $(".about_news_visual .img_container li img").css({ "top": "auto", "bottom": "0" })
      $(".about_news_visual .img_container .imgbox" + img_n).next("li").css("z-index", "2")
      $(".about_news_visual .img_container .imgbox" + img_n).css("z-index", "1")
      $(".about_news_visual .img_container .imgbox" + img_n).next("li").stop().animate({ "height": 0 }, img_duration, ease1, function () {
        if (img_n < 1) {
          img_n = img_length;
        }//if      

      })//animation
    }//if else

  }//fn


  $(".about_news_visual .next").click(function () {
    if (flag == true) { flag = false } else { return false }
    img_n++; title_n++
    dir = $(this).attr("data-dir")
    change()
    auto_play_reset()
  })//click
  $(".about_news_visual .prev").click(function () {
    if (flag == true) { flag = false } else { return false }
    img_n--; title_n--
    dir = $(this).attr("data-dir")
    change()
    auto_play_reset()
  })//click

})//ready





