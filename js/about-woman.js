$(function(){
  var st
  var en
  var range
  var value
  var ratio

 function draw(){
   st=$('.section-about-woman-1 svg').offset().top-winh*0.5
   en=$('.section-about-woman-2').offset().top-winh
   range=en-st
   value=scrt-st
   ratio=value/range
   target=1-ratio

   if(scrt<st){
     $('.section-about-woman-1 .path').css('stroke-dashoffset',1)
   }
   else if(scrt>=st && scrt<en){
     $('.section-about-woman-1 .path').css('stroke-dashoffset',target)
   }
   else{
     $('.section-about-woman-1 .path').css('stroke-dashoffset',0)
   }
 }//fn

 draw()
 $(window).resize(function(){
   draw()
 }).scroll(function(){
   draw()
 })

 ///////////////////////////////// svg /////////////////////////////
 var objt
 function motion(){
   $('.section-about-woman-2 li').each(function(){
     objt=$(this).offset().top
     if(scrt>=objt-winh*0.9){
       $(this).css({'transform':'translateX(0)','opacity':1})
     }
     else{
       $(this).css({'transform':'translateX(-70%)','opacity':0})
     }
   })

 }//fn

 motion()
 $(window).resize(function(){
   motion()
 }).scroll(function(){
   motion()
 })


})