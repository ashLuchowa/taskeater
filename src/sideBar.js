import projectPage from './projectPage.js';

const sideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    //-- Logo --//
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    logoContainer.textContent = 'TaskEater';
    sideBar.appendChild(logoContainer);

    //-- Task Container --//
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    // Add Task
    const addTask = document.createElement('div');
    addTask.classList.add('add-task');
    // Add Task Icon
    const addTaskIcon = document.createElement('div');
    addTaskIcon.classList.add('add-task-icon');
    addTaskIcon.textContent = '!';
    // Add Task Title
    const addTaskTitle = document.createElement('div');
    addTaskTitle.textContent = 'Add Task';
    addTaskTitle.classList.add('add-task-title');
    addTask.appendChild(addTaskIcon);
    addTask.appendChild(addTaskTitle);
    taskContainer.appendChild(addTask);
    sideBar.appendChild(taskContainer);

    // Task List Container
    const taskListContainer = document.createElement('div');
    taskListContainer.classList.add('task-list-container');
    taskContainer.appendChild(taskListContainer);
    // Task Item
    const randomFunction = (taskUnits) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskListContainer.appendChild(taskItem);
        // Task Item Icon
        const taskItemIcon = document.createElement('div');
        taskItemIcon.classList.add('task-item-icon');
        taskItem.appendChild(taskItemIcon);
        taskItemIcon.textContent = '!';
        // Task Item Title
        const taskItemTitle = document.createElement('div');
        taskItemTitle.classList.add('task-item-title');
        taskItem.appendChild(taskItemTitle);
        taskItemTitle.textContent = taskUnits.title;
        // Task Item Number
        const taskItemNumber = document.createElement('div');
        taskItemNumber.classList.add('task-item-number');
        taskItem.appendChild(taskItemNumber);
        taskItemNumber.textContent = 5;
    }


    

    projectPage(randomFunction);
}

export default sideBar;