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
    if(n>4){n=4}
    if(n<1){n=1}
    window.scrollTo({
      top : $('.kh-brand-section'+n).offset().top ,
      behavior : "smooth"
      
    })
  }) //마우스휠

/* ------ 스크롤 스파이--------- */

  function scrollProgress(){

  /*스크롤스파이*/
  var offset1=$('.kh-brand-section1').offset().top
  var offset2=$('.kh-brand-section2').offset().top
  var offset3=$('.kh-brand-section3').offset().top
  var offset4=$('.kh-brand-section4').offset().top

  if(scrt<offset2){
    n=1
  }else if(scrt>=offset2 && scrt<offset3){
    n=2
  }else if(scrt>=offset3 && scrt<offset4){
    n=3
  }else{
    n=4
  }

  $('.kh-scrollspy button').removeClass('active')
  $('.kh-btn'+n).addClass('active')
  }//fn

  scrollProgress()
  $(window).resize(function(){
    scrollProgress()
  }).scroll(function(){
    scrollProgress()
  })//window.event

  $('.kh-scrollspy button').click(function(){
    var n=$(this).attr('data-n')
    var target=$('.kh-brand-section'+n).offset().top +1
    $('body,html').stop().animate({"scrollTop":target},1000)
  })//click

  /* 스크롤모션 */
  function motion(){
    $('.kh-brand-section2 figure, .kh-brand-section3 figure, .kh-brand-section4 figure').each(function(){
      var t=$(this).offset().top
      if(scrt>=t-winh*0.5){
        $(this).addClass('active')
      }else{
        $(this).removeClass('active')
      }
    })//each
  }//fn

  motion()
  $(window).scroll(function(){
    motion()
  }).resize(function(){
    motion()
  })

})//ready