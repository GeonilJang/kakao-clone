const title = document.getElementById("title");

function handler(){
    switch(title.classList[1]){
      case "clicked":
        title.classList.remove("clicked");
        title.classList.add("clicked1");
        break;
      case "clicked1":
        title.classList.remove("clicked1");
        title.classList.add("clicked2");
        break;
      case "clicked2":
        title.classList.remove("clicked2");
        title.classList.add("clicked3");
        break;
      case "clicked3":
        title.classList.remove("clicked3");
        title.classList.add("clicked4");
        break;
      case "clicked4":
        title.classList.remove("clicked4");
        title.classList.add("clicked5");
        break;
      case "clicked5":
        title.classList.remove("clicked5");
        title.classList.add("clicked6");
        break;
      case "clicked6":
        title.classList.remove("clicked6");
        title.classList.add("clicked");
        break;
      default:
        title.classList.add("clicked1");
        title.classList.remove("clicked");
        break;
    }
}

function init(){
  window.addEventListener("click",handler);
}
init();

setInterval(handler,1000)
