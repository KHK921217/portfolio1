$(window).load(function () {
  var videoTotalCnt = $('video').size() * 0.5
  var videoLoadedCnt = 0
  if (videoTotalCnt != 0) {
    $('video').each(function () {
      $(this).bind('canplaythrough', function () {
        videoLoadedCnt++
        console.log(videoLoadedCnt, videoTotalCnt);
        if (videoTotalCnt === videoLoadedCnt) {
          setTimeout(function () {
            $('.preloader').fadeOut(1000)
            $('body').css({ 'overflow': 'auto' })
          }, 500)
        }
      })
    })//each
  }else{
    setTimeout(function () {
      $('.preloader').fadeOut(1000)
      $('body').css({ 'overflow': 'auto' })
    }, 500)
  }
})
