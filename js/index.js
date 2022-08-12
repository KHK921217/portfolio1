$(function(){
  function youtuberesize(){
    var imgw = $('.kh-youtube-container .kh-youtube-wrap .kh-ratio-img').innerWidth()
    var imgh = $('.kh-youtube-container .kh-youtube-wrap .kh-ratio-img').innerHeight()
    $('.kh-youtube-container .kh-youtube-wrap iframe').width(imgw)
    $('.kh-youtube-container .kh-youtube-wrap iframe').height(imgh)
    
    var imgw = $('.kh-intro-section2 .kh-youtube-wrap .kh-ratio-img').innerWidth()
    var imgh = $('.kh-intro-section2 .kh-youtube-wrap .kh-ratio-img').innerHeight()
    $('.kh-intro-section2 .kh-youtube-wrap iframe').width(imgw)
    $('.kh-intro-section2 .kh-youtube-wrap iframe').height(imgh)

  }
  youtuberesize()  
  $(window).load(function(){
    youtuberesize()
  })//load
  $(window).resize(function(){
    youtuberesize()
  })//resize

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
  console.log("tt");

  /* 슬라이드모션 */
/*   var n=1
  var isClick=true
  var timeoutId
  var interval = setInterval(function(){
    n++
    change()
  },2000)

  function change(){
    if(n>4){
      n=1
    }
    if(){}
  } */

  var n=1
  var isClick =true
  var timeoutId
  var interval=setInterval(function(){
    n++
    change()
  },2000)

  function change(){
    if(n>4){
      n=1
      $('.kh-img-container').addClass('none').css({'left':(n-1)*-100+'%'})
      $('.kh-img-container').css('left')
      $('.kh-img-container').removeClass('none')
      n=2
    }
    if(n<0){
      n=3
      $('.kh-img-container').addClass('none').css({'left':(n-1)*-100+'%'})
      $('.kh-img-container').css('left')
      $('.kh-img-container').removeClass('none')
      n=4
    }
    $('.kh-img-container').css({'left': (n-1)*-100+'%'})

    $('.kh-controls button').removeClass('active')
    $('.kh-controls .kh-btn' + n).addClass('active')
  }//fn

  function autoPlay(){
    clearInterval(interval)
    clearTimeout(timeoutId)
    timeoutId=setTimeout(function(){
      interval = setInterval(function(){
        n++
        change()
      },2000)
    },3000)
  }

  $('.kh-next').click(function(){
    if(isClick===false) return false
    isClick=false
    setTimeout(function(){isClick=ture},500)
    n++
    change()
    autoPlay()
  })

  $('.kh-prev').click(function(){
    if(isClick===false) return false
    isClick = false
    setTimeout(function(){isClick=ture},500)
    n--
    change()
    autoPlay()
  })

  $('.kh-controls button').click(function(){
    n=$(this).attr('data-n')
    change()
    autoPlay()
  })
})//ready

