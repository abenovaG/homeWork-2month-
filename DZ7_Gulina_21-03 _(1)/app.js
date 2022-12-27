document.querySelector('.addBtn').onclick = function () {
    if(document.querySelector('input').value === ''){
        alert('please enter a task')
    }else {(document.querySelector('.tasks').innerHTML
        +=`<div class="task">
            <span class="taskName">${document.querySelector('input').value}</span>
            <button class="delete">x</button>
           </div>`)
        let current_tasks = document.querySelectorAll('.delete');
        for(let i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        let doneTask = document.querySelectorAll('.taskName');
        for(let i = 0; i < doneTask.length; i++) {
           doneTask[i].onclick = function () {
              this.classList.toggle('.completed')
           }
        }
        document.querySelector('input').value = ''
        document.querySelector('input').focus()
    }
}