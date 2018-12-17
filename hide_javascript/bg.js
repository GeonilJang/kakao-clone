const body = document.querySelector("body");
const bg1 = document.querySelector(".timer .timer-body");
const bg2 = document.querySelector(".todo-div");

const IMG_NUMBER = 7;


function handleImgLoad(){
  console.log('finished load');
}

function paintImage(imgNumber){
  body.style.background = `url(imgs/${imgNumber+1}.jpg)`
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
