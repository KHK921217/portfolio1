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


})//fn

