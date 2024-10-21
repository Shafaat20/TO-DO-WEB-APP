let tasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    if (taskText !== "") {
        const task = {
            text: taskText,
            completed: false
        };

        tasks.push(task);
        taskInput.value = "";

        renderTasks();
    }
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const allTasksUl = document.getElementById('all-tasks');
    const pendingTasksUl = document.getElementById('pending-tasks');
    const completedTasksUl = document.getElementById('completed-tasks');

    allTasksUl.innerHTML = '';
    pendingTasksUl.innerHTML = '';
    completedTasksUl.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskLi = document.createElement('li');
        taskLi.textContent = task.text;
        taskLi.classList.toggle('completed', task.completed);

        const toggleButton = document.createElement('button');
        toggleButton.textContent = task.completed ? "Undo" : "Complete";
        toggleButton.onclick = () => toggleTaskCompletion(index);

        taskLi.appendChild(toggleButton);
        allTasksUl.appendChild(taskLi);

        if (task.completed) {
            completedTasksUl.appendChild(taskLi.cloneNode(true));
        } else {
            pendingTasksUl.appendChild(taskLi.cloneNode(true));
        }
    });
}
