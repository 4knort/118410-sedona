var navBtn = document.querySelector (".js-main-navigation-button");
var mainNav = document.querySelector(".js-main-nav");
var plus = document.querySelectorAll (".counter__btn--plus");
var minus = document.querySelectorAll (".counter__btn--minus");
var counterInput = document.querySelector (".counter__input");


for(i=0;i<plus.length;++i)
  plus[i].addEventListener("click", function(event){
    event.preventDefault();
    if(parseInt(counterInput.value) < 30){
      counterInput.value = parseInt(counterInput.value) +1;
    }
  });
for(i=0;i<minus.length;++i)
  minus[i].addEventListener("click", function(event){
    event.preventDefault();
    if(parseInt(counterInput.value) >= 1){
      counterInput.value = parseInt(counterInput.value) -1;
    }
  });



navBtn.addEventListener("click", function(event){
  event.preventDefault(),
  mainNav.classList.toggle("main-nav-open"),
  navBtn.classList.toggle("main-navigation-close")
});

// $(document).ready(function(){
//     $(".js-main-navigation-button").click(function(){
//         $(".js-main-nav").slideToggle("slow");
//     })
// })
