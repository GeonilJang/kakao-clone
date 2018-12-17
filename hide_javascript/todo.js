const tForm = document.querySelector(".js-toDoForm");
const tInput = tForm.querySelector("input");
const tList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function getTime(){
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day} ${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 9 ? `0${sec}` : sec}`;
}

let toDos =[];

function deleteTodo(event){
  const parentNode = event.target.parentNode.parentNode;
  tList.removeChild(parentNode);
  const cleanTodos = toDos.filter((toDo)=>{
    return toDo.id !== parseInt(parentNode.id);
    //다를 때만 저장하는 새로운 배열을 만들어요!
  })
  toDos = cleanTodos;
  saveToDos();

  console.log(cleanTodos);
}

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function paintToDo(text){
  const li = document.createElement('li');
  const newId = toDos.length+1;

  const timeSpan = document.createElement('div');
  timeSpan.innerText = getTime();


  const divl = document.createElement('div');
  const textSpan = document.createElement('span');

  textSpan.classList = "textSpan";
  textSpan.appendChild(timeSpan);
  textSpan.innerHTML += text;

  divl.appendChild(textSpan);

  const divr = document.createElement('div');
  const delBtn = document.createElement("button");
  delBtn.innerText = "x";
  delBtn.addEventListener("click",deleteTodo);
  divr.appendChild(delBtn);



  li.id=newId;
  divl.classList = "fd"
  li.appendChild(divl);
  li.appendChild(divr);
  tList.appendChild(li);


  const toDoObj ={
    text:text,
    id:newId
  }
  toDos.push(toDoObj);
  saveToDos();
}


function loadToDos(){
  const loadToDos = localStorage.getItem(TODOS_LS);
  if(loadToDos !== null){
    const parsedToDos = JSON.parse(loadToDos);
    parsedToDos.forEach((toDo)=>{
      paintToDo(toDo.text);
    })
  }
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
