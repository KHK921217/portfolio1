$(function () {
  var n = 1
  var flag = true
  var intervalID
  var timeoutID
  var col_n
  var img_length = $(".visual-about-woman figure").size()
  var delay_sec = 100
  var delay
  var duration = 2000
  var animation_total_duration = duration + delay_sec * 3 + 100
  var intervalDelay = animation_total_duration + 2000
  var timeoutDelay = intervalDelay + 5000
  var prd_n


  for (i = 1; i <= img_length; i++) {
    $(".visual-about-woman .imgbox" + i)
      .addClass("imgbox" + (i + img_length) + " imgbox" + (i - img_length))
      .css("left", (i - 1) * 100 + "%")
      .attr("data-n", i)
  }//for

  for (i = 1; i <= img_length; i++) {
    $(".visual-about-woman .imgbox" + i).clone()
      .appendTo(".visual-about-woman .img_container")
      .css("left", ((img_length - 1) * 100) + (i * 100) + "%")
      .attr("data-n", i + img_length);
  }//for

  for (i = img_length; i >= 1; i--) {
    $(".visual-about-woman .imgbox" + i).eq(0).clone()
      .prependTo(".visual-about-woman .img_container")
      .css("left", (img_length - i + 1) * -100 + "%")
      .attr("data-n", -(img_length - i))
  }//for

  $(".visual-about-woman .img_container figure img").css("transition", "all  " + duration / 1000 + "s")
  $(".visual-about-woman h2").appendTo(".visual-about-woman .img_container")
  set_active()

  function set_active() {
    $(".visual-about-woman figure").removeClass("active active_c active_r active_l")
    $(".visual-about-woman .imgbox" + n).addClass("active active_c")
    $(".visual-about-woman .imgbox" + n).next("figure").addClass("active active_r")
    $(".visual-about-woman .imgbox" + n).prev("figure").addClass("active active_l")
    /*     
    if (n % 2 == 1) {
      $(".visual-about-woman .imgbox" + n).next("figure").addClass("active")
    } else {
      $(".visual-about-woman .imgbox" + n).prev("figure").addClass("active")
    }
    */
    $(".visual-about-woman .textbox").hide()
    prd_n = Math.ceil(n / 2)
    if (prd_n > img_length / 2) { prd_n = 1 }
    if (prd_n < 1) { prd_n = img_length / 2 }
    $(".visual-about-woman .textbox" + prd_n).show()
    $(".visual-about-woman .indicator .cnt sup").text(prd_n)
  }//fn

  function change() {
    $(".visual-about-woman figure").each(function () {
      col_n = parseInt($(this).attr("data-n"))
      if (col_n < n - 1) {
        delay = 0
      } else if (col_n === n - 1) {
        delay = delay_sec * 1
      } else if (col_n === n) {
        delay = delay_sec * 2
      } else {
        delay = delay_sec * 3
      }
      $(this).children("img").css("transition-delay", (delay / 1000) + "s")
      set_active()
      $(this).stop().delay(delay).animate({ "left": (n - col_n) * -100 + "%" }, duration, "easeInOutBack")
    })//each

    setTimeout(function () {
      $(".visual-about-woman figure").each(function () {
        if (n > img_length) { n = 1 }
        if (n < 1) { n = img_length }
        col_n = parseInt($(this).attr("data-n"))
        $(this).css("left", (n - col_n) * -100 + "%")
      })//each
      flag = true
    }, animation_total_duration)
  }//fn 

  autoplay()
  function progress() {
    $(".visual-about-woman .progress span").stop().css({ "width": "0%" })
    $(".visual-about-woman .progress span").stop().animate({ "width": "100%" }, intervalDelay)
  }//fn
  function autoplay() {
    progress()
    intervalID = setInterval(function () {
      n++
      change()
      progress()
    }, intervalDelay)//interval
  }//fn
  function restart_autoplay() {
    $(".visual-about-woman .progress span").stop().css({ "width": "0%" })
    clearInterval(intervalID)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(function () {
      autoplay()
    }, timeoutDelay)
  }//fn

  $(".visual-about-woman .next").click(function () {
    if (flag === true) { flag = false } else { return false }
    n++
    restart_autoplay()
    change()
  })
  $(".visual-about-woman .prev").click(function () {
    if (flag === true) { flag = false } else { return false }
    n--
    restart_autoplay()
    change()
  })

  $(".visual-about-woman figure:nth-child(5)").prevAll().each(function () {
    console.log($(this).attr("class"))
  })
})//ready