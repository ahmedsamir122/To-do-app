const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const tasksContainer = document.querySelector('.tasks');
const btnDel = document.querySelector('.del');
const tasks = [];
const state ={
    task:{}
}

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
    
})
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

tasksContainer.addEventListener('click', (e) => {
    const click = e.target.closest('.del');
    const done = e.target.closest('.task') ;
    if(done){
        done.classList.toggle('done');
    }
    if(click) {
        console.log('del');
        const div = click.closest('.task')
        const idDiv = div.dataset.id;
        const index = tasks.findIndex(task => task.id===+idDiv);
        tasks.splice(index, 1)
        renderTasks(tasks);       
    }
})

const updateTask = function(div) {

}