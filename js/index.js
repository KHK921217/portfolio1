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
})//ready

