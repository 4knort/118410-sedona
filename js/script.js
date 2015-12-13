var navBtn = document.querySelector (".js-main-navigation-button");
var mainNav = document.querySelector(".js-main-nav");
var plus = document.querySelectorAll (".counter__btn--plus");
var minus = document.querySelectorAll (".counter__btn--minus");
var counterInput = document.querySelector (".counter__input");

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



for(i=0;i<plus.length;i++){
  plus[i].addEventListener("click", function(event){
    event.preventDefault();
    var el = event.target;
    var parent = el.parentNode;
    counterInput = parent.querySelector(".counter__input")
    if(parseInt(counterInput.value) < 30){
      counterInput.value = parseInt(counterInput.value) +1;
    }
  });
}

for(i=0;i<minus.length;i++){
  minus[i].addEventListener("click", function(event){
    event.preventDefault();
    var el = event.target;
    var parent = el.parentNode;
    counterInput = parent.querySelector(".counter__input")
    if(parseInt(counterInput.value) -1 >= 0){
      counterInput.value = parseInt(counterInput.value) -1;
    }
  });
}







(function(){
  if(!("FormData" in window)){
    return;
  }
  var queue = [];
  var form = document.querySelector(".form");

  function removePreview(div) {
    queue = queue.filter(function(element) {
    return element.div != div; // ????
    });

    div.parentNode.removeChild(div);
  }

  form.addEventListener("submit", function(event){
    event.preventDefault();

    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    queue.forEach(function(element) {
      data.append("images", element.file);
    });  // ???  почему element.file это сам файл имг который нам нужен.

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);
    xhr.addEventListener("readystatechange", function(){
      if(xhr.readyState == 4){
        console.log(xhr.responseText);
      }
    });
  xhr.send(data);
  form.reset();
  });


  if ("FileReader" in window){
    form.querySelector(".js-input-file").addEventListener("change", function() {

      var files = this.files;
      for (var i = 0; i < files.length; i++) {
        preview(files[i]);  // каждый файл(каждый элемент массива) запускает функцию превью
      }
      this.value = "";
    });

    function preview(file){
      var area = document.querySelector(".js-photo-wrap");
      var imgTemplate = document.querySelector("#image-template").innerHTML;
      if (file.type.match(/image.*/)){
        var reader = new FileReader(); //  позволяет читать файлы, переделывает в base64

        reader.addEventListener("load", function(event){  // событие которое срабатывает когда файл загружен

          var html = imgTemplate.replace("{{image}}", event.target.result); // target это элемент на котором произошло событие и у него есть свойтво резалт в котором будет наша картинка
          html = html.replace("{{name}}", file.name);

          var div = document.createElement("div");
          div.classList.add("form-photo__item");
          div.innerHTML = html;
          area.appendChild(div);

          queue.push({file: file, div: div}); //???

          div.querySelector(".form-photo__btn").addEventListener("click", function(event){
            event.preventDefault();
            removePreview(div);
          });

        });

        reader.readAsDataURL(file); // спец метод который может прочитать данные с файла который браузер подготовил
      }
    }
  }
})();
