$(function(){
  
  var obj_t  

  function motion(){
    $(".section_category li .inner").each(function(){
      obj_t = $(this).offset().top
      if(scrt >= obj_t - winh*0.8){
        $(this).addClass("active")
      }else{
        $(this).removeClass("active")
      }
    })//each
  }//fn
  motion()
  $(window).resize(function(){
    motion()
  }).scroll(function(){
    motion()
  })//event
})//ready 