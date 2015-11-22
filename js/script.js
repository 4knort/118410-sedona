var navBtn = document.querySelector (".main-navigation-button-js");
var mainNav = document.querySelector(".main-nav-js");


navBtn.addEventListener("click", function(event){
  event.preventDefault(),
  mainNav.classList.toggle("main-nav-open"),
  navBtn.classList.toggle("main-navigation-close")
});
