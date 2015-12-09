var navBtn = document.querySelector (".js-main-navigation-button");
var mainNav = document.querySelector(".js-main-nav");
var plus = document.querySelectorAll (".counter__btn--plus");
var minus = document.querySelectorAll (".counter__btn--minus");
var counterInput = document.querySelector (".counter__input");


// for(i=0;i<plus.length;i++)
//   plus[i].addEventListener("click", function(event){
//     event.preventDefault();
//     if(parseInt(counterInput.value) < 30){
//       counterInput.value = parseInt(counterInput.value) +1;
//     }
//   });

// for(i=0;i<minus.length;i++)
//   minus[i].addEventListener("click", function(event){
//     event.preventDefault();
//     if(parseInt(counterInput.value) >= 1){
//       counterInput.value = parseInt(counterInput.value) -1;
//     }
//   });

for(i=0;i<plus.length;i++){
  plus[i].addEventListener("click", function(event){
    event.preventDefault();
    var counter = plus[i].parentNode;
    var parentCounter = counter.querySelector("counter__input");
    if(parseInt(parentCounter.value) < 30){
      parentCounter.value = parseInt(parentCounter.value) +1;
    }
  });
}

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

(function(){
  if(!("FormData" in window)){
    return;
  }
  var form = document.querySelector(".form");

  form.addEventListener("submit", function(event){
    event.preventDefault();

    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);
    xhr.addEventListener("readystatechange", function(){
      if(xhr.readyState == 4){
        console.log(xhr.responseText);
      }
    });
  xhr.send(data);
  });


  if ("FileReader" in window){

    form.querySelector(".js-input-file").addEventListener("change", function() {

      var files = this.files;
      for (var i = 0; i < files.length; i++) {
        preview(files[i]);
      }
    });

    function preview(file){
      var area = document.querySelector(".js-photo-wrap");

      if (file.type.match(/image.*/)){
        var reader = new FileReader();

        reader.addEventListener("load", function(event){

          var photoItem = document.createElement("div");
          var img = document.createElement("img");
          var button = document.createElement("button");    // создаем див в котором будет фото и кнопка

          photoItem.classList.add("form-photo__item");
          button.classList.add("form-photo__btn") // даем нужные классы созданынм элементам

          img.src = event.target.result;
          img.alt = file.name;

          area.appendChild(photoItem);
          photoItem.appendChild(img);
          photoItem.appendChild(button); // добавляем элементы в хтмл
        });

        reader.readAsDataURL(file);
      }
    }
  }
})();
