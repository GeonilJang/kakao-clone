const title = document.getElementById("title");

const CLICK_CLASS ="clicked";

function handler(){
  const hasClass = title.classList.contains(CLICK_CLASS);
  title.classList.toggle(CLICK_CLASS);
  // if(!hasClass){
  //   title.classList.add(CLICK_CLASS);
  // }else{
  //   title.classList.remove(CLICK_CLASS);
  // }
}

function init(){
  window.addEventListener("click",handler);
}
init();
