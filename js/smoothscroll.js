$(function(){
  var speed = 0
  var delta

  window.addEventListener('mousewheel',function(e){
    e.preventDefault()
    delta = e.wheelDelta / -120
    //speed=30*delta //등속도 스크롤
    speed +=30*delta
  },{passive:false})

  setInterval(function(){
    window.scrollTo({
      top: scrt + speed,
    })
    speed = speed * 0.9/* 1에 가까운 수일수록 느리게 감 */
  },20)

})//ready