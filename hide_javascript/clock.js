const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

const btn = document.querySelector('.timer .btn');
btn.addEventListener("click",()=>{location.href="../index.html"});


(()=>{
const date = new Date();
const min = date.getMinutes();
const hours = date.getHours();
const sec = date.getSeconds();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
clockTitle.innerText =`${year}-${month}-${day} ${hours < 10 ? `0${hours}` : hours} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
})();

function getTiem(){
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  clockTitle.innerText =`${year}-${month}-${day} ${hours < 10 ? `0${hours}` : hours} : ${min < 10 ? `0${min}` : min} : ${sec < 9 ? `0${sec}` : sec}`;
}

function init(){
  getTiem();
}

setInterval(init,1000)
