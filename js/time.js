const time = document.querySelector(".header__colum.time");

const date = new Date();
const min = date.getMinutes();
const hour = date.getHours();
time.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`

function getTime(){
  const date = new Date();
  const min = date.getMinutes();
  const hour = date.getHours();
  time.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`
}
setInterval(getTime,1000);
