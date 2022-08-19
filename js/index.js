$(function(){
  
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
  bubble('.bubble-container','./img/bubble')

  /* scrollspy------------------------- */
  function scrollSpy(){

    var offset1=$('.kh-intro-section1').offset().top
    var offset2=$('.kh-intro-section2').offset().top
    var offset3=$('.kh-intro-section3').offset().top
    var section=$()
  
    if(scrt<offset2){
      section=1
    }else if(scrt>=offset2 && scrt<offset3){
      section=2
    }else{
      section=3
    }
    
    $('.kh-intro-scrollspy button').removeClass('active')
    $('.kh-intro-scrollspy .kh-index-btn'+section).addClass('active')
  
  }//fn

  scrollSpy()
  $(window).resize(function(){
    scrollSpy()
  }).scroll(function(){
    scrollSpy()
  })//windowevetn

  $('.kh-intro-scrollspy button').click(function(){
    var n = $(this).attr('data-n')
    var target=$('.kh-intro-section'+n).offset().top
    $('body,html').stop().animate({"scrollTop":target},500)
  })//click


})//ready

