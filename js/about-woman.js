$(function () {
var cont=$("img").offset().top
var conh=$("img").innerHeight()
var ceta
 function pallarex(){
$(".about-woman-section1 li").each(function(){

  cont=$(this).offset().top
  conh=$(this).innerHeight()
  ceta=1+(scrt-(cont-winh*0.5+conh*0.5))*0.085
  $(this).find("img").css({"transform":"scale(0.94) translateY("+ceta+"px)"})

})


 }//pallarex fn_
 pallarex()
  $(window).scroll(function(){
    pallarex()
  }).resize(function(){
    pallarex()
  })
})
 function pallarex(){
$(".about-woman-section2 li").each(function(){
  if(winh){

  }
  cont=$(this).offset().top
  conh=$(this).innerHeight()
  ceta=3+(scrt-(cont-winh*0.5+conh*0.5))*0.007
  $(".vanilabeen").find("img").css({"transform":"scale(0.84) translateY("+ceta+"px)"})

})


 }//pallarex fn_
 pallarex()
  $(window).scroll(function(){
    pallarex()
  }).resize(function(){
    pallarex()
  })

