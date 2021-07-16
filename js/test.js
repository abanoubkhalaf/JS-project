//inputs animation
const taskInput = document.getElementById('let');
const filter = document.getElementById('filter');

taskInput.addEventListener('focus', function () {
  document.querySelector("label").style.bottom = '0';
  document.querySelector("label").style.transition = '0.3s';
})

taskInput.addEventListener('blur', function () {
  if (taskInput.value === "") {
    document.querySelector("label").style.bottom = '-12px';
  } else {
    document.querySelector("label").style.bottom = '0px';
  }
})

filter.addEventListener('focus', function () {
  document.querySelector(".lab-filter").style.bottom = '0';
  document.querySelector(".lab-filter").style.transition = '0.3s';
})
filter.addEventListener('blur', function () {
  if (filter.value === "") {
    document.querySelector(".lab-filter").style.bottom = '-12px';
  } else {
    document.querySelector(".lab-filter").style.bottom = '0px';
  }
})


const form = document.querySelector('form');
const taskLikst = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear');




loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks)
  form.addEventListener('submit', addTask);
  taskLikst.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filterTasks)
}

function getTasks() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-minus-circle"></i>';

    li.appendChild(link);

    taskLikst.appendChild(li);
  })
}


function addTask(e) {
if (taskInput.value === ""){
  alert("write a task")
}else{
  
 const li = document.createElement('li');
 li.className = 'collection-item';
 li.appendChild(document.createTextNode(taskInput.value));
 const link = document.createElement('a');
 link.className = 'delete-item secondary-content'
 link.innerHTML = '<i class="fas fa-minus-circle"></i>'
 li.appendChild(link);

 taskLikst.appendChild(li);

 storeTaskInLocalStorge(taskInput.value);
}
 e.preventDefault();
}


function storeTaskInLocalStorge(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks' , JSON.stringify(tasks));

}


function removeTask(e) {
  if (e.target.classList.contains("fa-minus-circle")) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorge(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorge(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task , index ){
    if(taskItem.textContent === task){
      tasks.splice(index,1)
    }
  })
  localStorage.setItem('tasks' , JSON.stringify(tasks));
  
}


function clearTask() {

  while (taskLikst.firstChild) {
    taskLikst.removeChild(taskLikst.firstChild);
    
  }
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
 localStorage.clear();
}

function filterTasks(e) {
const text = e.target.value.toLowerCase();
console.log(text);

document.querySelectorAll('.collection-item').forEach(function(task){
const item = task.textContent;

if(item.toLowerCase().indexOf(text) != -1){
  task.style.display = 'flex';
}else{
  task.style.display = 'none';
}
})
}
