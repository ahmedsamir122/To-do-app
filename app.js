const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const tasksContainer = document.querySelector('.tasks');
const btnDel = document.querySelector('.del');
let tasks = [];
const state ={
    task:{}
}

// const getDataLocalStorage = function() {
//     let data = window.localStorage.getItem('tasks');
//     if(data) {
//         let tasks = JSON.parse(data);
//     }
// }

if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

const renderTasks = function (arrayTasks){
    let mark;
    tasksContainer.innerHTML = '';
    arrayTasks.forEach(task => {
        if(task.complete){
            mark = `<div class="task done" data-id ="${task.id}">${task.title} <span class="del">Delete</span></div>`;
        } else {
             mark = `<div class="task" data-id ="${task.id}">${task.title} <span class="del">Delete</span></div>`;
        }
        tasksContainer.insertAdjacentHTML('afterbegin',mark);
    });
    input.value ='';
}
// getDataLocalStorage();
renderTasks(tasks);


btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = input.value;
    if(value ==='') return;
    state.task = {
        id:Date.now(),
        title:value,
        complete: false,
    }
    tasks.push(state.task);
    console.log(state.task);
    console.log(tasks);
    renderTasks(tasks);
    addToLocalStorage(tasks);
})


tasksContainer.addEventListener('click', (e) => {
    const click = e.target.closest('.del');
    const done = e.target.closest('.task') ;

    updateTask(done);

    deleteTask(click);

    addToLocalStorage(tasks);

    console.log(tasks);

})

const updateTask = function(div) {
    if(div){
        div.classList.toggle('done');
    }
    if(div.classList.contains('done')){
         const index = tasks.findIndex(task => task.id === +div.dataset.id);
         tasks[index].complete=true;
    }
    else {
        const index = tasks.findIndex(task => task.id === +div.dataset.id);
         tasks[index].complete=false;
    }
}

const deleteTask =function(element){
    if(element) {
        console.log('del');
        const div = element.closest('.task')
        const idDiv = div.dataset.id;
        const index = tasks.findIndex(task => task.id===+idDiv);
        tasks.splice(index, 1)
        renderTasks(tasks);       
    }
}

const addToLocalStorage = function(array){
    window.localStorage.setItem('tasks', JSON.stringify(array));
}

