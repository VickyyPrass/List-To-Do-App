const inputText = document.querySelector('.input-text');
const addBtn = document.querySelector('.addBtn');
const textList = document.querySelector('.text-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    if (inputText.value === '') {
        alert('You Must Write Something !');
    } else {
        const taskContainer = textList.appendChild(document.createElement("div"));
        const task = taskContainer.appendChild(document.createElement("p"));
        const doneBtn = taskContainer.appendChild(document.createElement('i'));
        const deleteBtn = taskContainer.appendChild(document.createElement('i'));

        taskContainer.className = 'taskContainer';
        task.className = 'task';
        doneBtn.className = 'fas fa-check';
        deleteBtn.className = 'fas fa-trash-alt';

        task.innerHTML = inputText.value.charAt(0) + inputText.value.slice(1);
        inputText.value = '';

        deleteBtn.addEventListener('click', deleteTask);
        doneBtn.addEventListener('click', doneTask);

        function deleteTask(e) {
            e.target.parentElement.remove();
        }

        function doneTask(e) {
            e.target.previousSibling.style.textDecoration = 'line-through';
            e.target.previousSibling.style.fontStyle = 'italic';
            taskContainer.style.backgroundColor = '#888';
            taskContainer.style.color = 'white';
        }
    }
}