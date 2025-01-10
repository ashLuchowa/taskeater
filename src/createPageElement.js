const createPageElement = (value) => {
    //-------- Generate Project Page ---------//

    // Target Main Container
    const displayContainer = document.querySelector('.display-container');
    // // Reset the Page
    // displayContainer.innerHTML = '';

    // Display Container Header
    const displayContainerHeader = document.createElement('div');
    displayContainerHeader.classList.add('display-container-header');
    displayContainer.appendChild(displayContainerHeader);

    // // Header Title
    // const headerTitle = document.createElement('div');
    // headerTitle.classList.add('header-title');
    // displayContainerHeader.appendChild(headerTitle);
    // headerTitle.textContent = value.title;

    const result = document.querySelectorAll('.project-item');
    result.forEach(item => {
        item.addEventListener('click', (e)=> {
            console.log(e);
        });
    });


    // // Header Add Task
    // const headerAddTask = document.createElement('div');
    // headerAddTask.classList.add('header-add-task');
    // displayContainerHeader.appendChild(headerAddTask);
    // headerAddTask.textContent = 'Add Task';

    // // Header Description
    // const headerDescription = document.createElement('div');
    // headerDescription.classList.add('header-description');
    // displayContainerHeader.appendChild(headerDescription);
    // headerDescription.textContent = value.description;

    
};

export default createPageElement;