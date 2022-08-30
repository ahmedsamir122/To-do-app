const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const tasksContainer = document.querySelector('.tasks');
const btnDel = document.querySelector('.del');
const tasks = [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = input.value;
    if(value ==='') return;
    console.log('testtt')
    const mark = `<div class="task">${value} <span class="del">Delete</span></div>`;
    tasksContainer.insertAdjacentHTML('beforeend',mark);
    input.value ='';

})