var navBtn = document.querySelector (".js-main-navigation-button");
var plus = document.querySelectorAll (".counter__btn--plus");
var counterInput = document.querySelector (".counter__input");


for(i=0;i<plus.length;++i)
  plus[i].addEventListener("click", function(event){
    event.preventDefault();
    if(parseInt(counterInput.value) < 30){
      counterInput.value = parseInt(counterInput.value) +1;
    }
  })



navBtn.addEventListener("click", function(event){
  event.preventDefault(),
  navBtn.classList.toggle("main-navigation-close")
});

$(document).ready(function(){
    $(".js-main-navigation-button").click(function(){
        $(".js-main-nav").slideToggle("slow");
    })
})
