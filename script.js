const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value;
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <span class="taskText">${taskText}</span>
      <button class="taskDeleteBtn">Delete</button>
    `;
    taskList.appendChild(newTask);
    newTaskInput.value = '';
    newTask.querySelector('.taskDeleteBtn').addEventListener('click', () => {
      newTask.remove();
    });
  }
});
