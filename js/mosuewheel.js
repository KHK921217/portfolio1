$(function(){
  var delta
  var n
  /* 오리지널 문법
  window.addEventListener("mousewheel",function(e){
    e.preventDefault()
    delta=e.wheelDelta/-120

  },{passive:false})*/

  $('section').bind('mousewheel',function(e){
    e.preventDefault()
    delta = e.originalEvent.wheelDelta / -120
    n = parseInt($(this).attr('data-n'))

    if(delta===1){//휠을 아래로 내리면
      n=n+1
    }else{//휠을 위로 올리면
      n=n-1
    }
    if(n>5){n=5}
    if(n<1){n=1}
    window.scrollTo({
      top : $('.section'+n).offset().top ,
      behavior : "smooth"
      
    })
  })

})//ready