var navBtn = document.querySelector (".js-main-navigation-button");
var mainNav = document.querySelector(".js-main-nav");


navBtn.addEventListener("click", function(event){
  event.preventDefault(),
  mainNav.classList.toggle("main-nav-open"),
  navBtn.classList.toggle("main-navigation-close")
});
