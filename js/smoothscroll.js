$(function () {
  
  var isMobile = false;
  var filter = "win16|win32|win64|mac";
  if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLowerCase()) < 0;
  }
  if (isMobile === false) {
    isSmoothScroll = true
    scrollSpeed = 0
    var delta

    window.addEventListener('mousewheel', function (e) {
      if (isSmoothScroll) {
        e.preventDefault()
        delta = e.wheelDelta / -120
        //speed=30*delta //등속도 스크롤
        scrollSpeed += 30 * delta
      }
    }, { passive: false })

    setInterval(function () {
      if (isSmoothScroll) {
        window.scrollTo({
          top: scrt + scrollSpeed,
        })
        scrollSpeed = scrollSpeed * 0.9/* 1에 가까운 수일수록 느리게 감 */
      }else{
        scrollSpeed =0
      }
      
    }, 30)
  }

})//ready