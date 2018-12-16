const tForm = document.querySelector(".js-toDoForm");
const tInput = tForm.querySelector("input");
const tList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){

  }
}

function paintToDo(text){
  const li = document.createElement('li');
  const delBtn = document.createElement("button");
  delBtn.innerText="X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
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
