const createPageElement = (e) => {
    //-------- Generate Project Page ---------//

    // Target Main Container
    const displayContainer = document.querySelector('.display-container');
    // Reset the Page
    displayContainer.innerHTML = '';

    // Display Container Header
    const displayContainerHeader = document.createElement('div');
    displayContainerHeader.classList.add('display-container-header');
    displayContainer.appendChild(displayContainerHeader);

    // Header Title
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-title');
    displayContainerHeader.appendChild(headerTitle);
    headerTitle.textContent = e.target.textContent;

    // Header Add Task
    const headerAddTask = document.createElement('div');
    headerAddTask.classList.add('header-add-task');
    displayContainerHeader.appendChild(headerAddTask);
    headerAddTask.textContent = 'Add Task';

    // Header Description
    const headerDescription = document.createElement('div');
    headerDescription.classList.add('header-description');
    displayContainerHeader.appendChild(headerDescription);
    headerDescription.textContent = e.target.textContent;

    console.log(this);
}

export default createPageElement;