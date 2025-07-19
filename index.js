const inputType = document.querySelector(".inputhumai");
const mainDiv = document.querySelector(".main-div");
const form = document.querySelector(".form");
let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//const taskWalaNewdiv = document.querySelector("listdikhnewala-div");

function renderTasks(){
    const taskWalaNewdiv = document.querySelector(".listdikhnewala-div");
    taskWalaNewdiv.innerHTML = '';

    tasks.forEach((t,i) =>{
        //const taskWalaNewdiv = document.createElement('div');
        //taskWalaNewdiv.classList.add('listdikhnewala-div');

        const taskWalaNewdiv = document.createElement('div');
        taskWalaNewdiv.classList.add('task-item');

        const checkUncheckBtn = document.createElement('button');
        checkUncheckBtn.classList.add('checkwalibtn' , 'check');

        const checkUncheckImg = document.createElement('img');
        checkUncheckImg.classList.add('check-uncheckimg' , 'check');
        checkUncheckImg.src = t.done ? '/images/checked.png':'/images/unchecked.png' ;
        checkUncheckImg.alt = t.done ? 'checked':'unchecked';

        checkUncheckBtn.append(checkUncheckImg);

        
        const para = document.createElement('p');
        para.classList.add('paraoflist' );
        para.textContent = t.text;
        if(t.done) para.classList.add('completed');


        const clearwalibtn = document.createElement('button');
        clearwalibtn.classList.add('clearbutton');
        clearwalibtn.innerHTML = `
        <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>`;

        checkUncheckBtn.addEventListener('click' , ()=>{
            tasks[i].done = !tasks[i].done ;
            localStorage.setItem('tasks' , JSON.stringify(tasks));
            renderTasks();
        });

        clearwalibtn.addEventListener('click' , ()=>{
            tasks.splice(i,1);
            localStorage.setItem('tasks' , JSON.stringify(tasks));
            renderTasks();
        });

        const listContainer = document.querySelector(".listdikhnewala-div");
        taskWalaNewdiv.append(checkUncheckBtn,para,clearwalibtn);
        listContainer.appendChild(taskWalaNewdiv);

       


    });

}

form.addEventListener("submit", e =>{
    e.preventDefault();
    const taskinputwala = inputType.value.trim();
    if(!taskinputwala){
        return;
    }

   /* const taskWalaNewdiv = document.createElement('div');
    taskWalaNewdiv.classList.add('listdikhnewala-div');

    const checkUncheckBtn = document.createElement('button');
    checkUncheckBtn.classList.add('checkwalibtn' , 'check');

    const checkUncheckImg = document.createElement('img');
    checkUncheckImg.classList.add('check-uncheckimg' , 'check');
    checkUncheckImg.src = '/images/unchecked.png' ;
    checkUncheckImg.alt = 'unchecked';

    checkUncheckBtn.append(checkUncheckImg);

    const para = document.createElement('p');
    para.classList.add('paraoflist' );
    para.textContent = taskinputwala ;

    const clearwalibtn = document.createElement('button');
    clearwalibtn.classList.add('clearbutton');
    clearwalibtn.innerHTML = `
    <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
    </svg>`;

    taskWalaNewdiv.append(checkUncheckBtn,para,clearwalibtn);

    const mainDiv = document.querySelector('.main-div');*/
    tasks.push({text: taskinputwala , done : false});
    localStorage.setItem('tasks' , JSON.stringify(tasks));
    renderTasks();

    inputType.value = '';

   /* checkUncheckBtn.addEventListener( 'click' , () =>{
        para.classList.toggle('completed');
    
        if(para.classList.contains('completed')){
            checkUncheckImg.src = '/images/checked.png';
    
        }
        else{
            checkUncheckImg.src = '/images/unchecked.png';
        }
    
    
        
    });

    clearwalibtn.addEventListener('click' , () =>{
        taskWalaNewdiv.remove();
    }); */


    

 

});

window.addEventListener('DOMContentLoaded' , renderTasks);
