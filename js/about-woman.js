$(function(){
    var ceta
    var cont
    var conh
  function pallarex(){
     cont=$("img").offset().top
     conh=$("img").innerHeight()
     ceta=0
    if(ceta<0){
      ceta=1
    }
    if(ceta<0){
      ceta=1
    }
  }
  pallarex()
  $(window).resize(function(){
    pallarex()
  }).scroll(function(){
    pallarex()
  })
})