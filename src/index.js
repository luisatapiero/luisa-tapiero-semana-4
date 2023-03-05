import "./components/sectionComponent/sectionComponent.js";
import "./components/toDoItem/toDoItem.js";

const toDoListBtn = document.getElementById('to-do-btn');
toDoListBtn.addEventListener('click',()=>addItem());

const toDoList = document.getElementById('to-do-list');

function addItem(){

const input = document.getElementById('create-to-do');
console.log(input.value);
const toDoItem = document.createElement('to-do-item');
toDoItem.setAttribute('task', input.value);
toDoList.append(toDoItem);
input.value = '';


}