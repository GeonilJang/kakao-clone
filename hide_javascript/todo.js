const tForm = document.querySelector(".js-toDoForm");
const tInput = tForm.querySelector("input");
const tList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function getTime(){
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  return `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 9 ? `0${sec}` : sec}`;
}

function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){

  }
}

function paintToDo(text){
  const li = document.createElement('li');
  const divl = document.createElement('div');
  const divr = document.createElement('div');

  const delBtn = document.createElement("button");
  delBtn.innerText = "x"

  const span = document.createElement("span");
  span.innerText = text;

  const spant = document.createElement('span');
  spant.innerText = getTime();

  divr.appendChild(delBtn);
  divl.appendChild(spant);
  divl.appendChild(span);

  li.appendChild(divl);
  li.appendChild(divr);
  tList.appendChild(li);


}

function init(){
  loadToDos();
  tForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const currentValue = tInput.value;
    tInput.value = "";
    paintToDo(currentValue);
  })
}

init();
