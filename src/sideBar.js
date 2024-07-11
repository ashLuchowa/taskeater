import generateSidebarElements from './generateSidebarElements.js';

const sideBar = () => {
    const sideBar = document.querySelector('.sidebar');

    //-------- Logo ---------//
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.textContent = 'TaskEater';
    sideBar.appendChild(logoContainer);

    //-------- Option Container --------//
    const optionContainer = document.querySelector('.option-container');
    // Add Option
    const addOption = document.createElement('div');
    addOption.classList.add('add-option');
    // Add Option Icon
    const addOptionIcon = document.createElement('div');
    addOptionIcon.classList.add('add-option-icon');
    addOptionIcon.textContent = '!';
    // Add Option Title
    const addOptionTitle = document.createElement('div');
    addOptionTitle.textContent = 'Add option';
    addOptionTitle.classList.add('add-option-title');
    addOption.appendChild(addOptionIcon);
    addOption.appendChild(addOptionTitle);
    optionContainer.appendChild(addOption);
    sideBar.appendChild(optionContainer);

    // Option List Container
    const optionListContainer = document.createElement('div');
    optionListContainer.classList.add('option-list-container');
    optionContainer.appendChild(optionListContainer);
    // Option Item
    const createOptionFunction = (optionUnits) => {
        const optionItem = document.createElement('div');
        optionItem.classList.add('option-item');
        optionListContainer.appendChild(optionItem);
        // Option Item Icon
        const optionItemIcon = document.createElement('div');
        optionItemIcon.classList.add('option-item-icon');
        optionItem.appendChild(optionItemIcon);
        optionItemIcon.textContent = '!';
        // Option Item Title
        const optionItemTitle = document.createElement('div');
        optionItemTitle.classList.add('option-item-title');
        optionItem.appendChild(optionItemTitle);
        optionItemTitle.textContent = optionUnits.title;
        // Option Item Number
        const optionItemNumber = document.createElement('div');
        optionItemNumber.classList.add('option-item-number');
        optionItem.appendChild(optionItemNumber);
        optionItemNumber.textContent = optionUnits.number;
    }

    //-------- Project Container --------//
    const projectContainer = document.querySelector('.project-container');
    // Add Project
    const addProject = document.createElement('div');
    addProject.classList.add('add-project');
    // Add Project Icon
    const addProjectIcon = document.createElement('div');
    addProjectIcon.classList.add('add-project-icon');
    addProjectIcon.textContent = '!';
    // Add Project Title
    const addProjectTitle = document.createElement('div');
    addProjectTitle.textContent = 'Add project';
    addProjectTitle.classList.add('add-project-title');
    addProject.appendChild(addProjectIcon);
    addProject.appendChild(addProjectTitle);
    projectContainer.appendChild(addProject);
    sideBar.appendChild(projectContainer);

    // Project List Container
    const projectListContainer = document.createElement('div');
    projectListContainer.classList.add('project-list-container');
    projectContainer.appendChild(projectListContainer);
    // Project Item
    const createProjectFunction = (projectUnits) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectListContainer.appendChild(projectItem);
        // Project Item Icon
        const projectItemIcon = document.createElement('div');
        projectItemIcon.classList.add('project-item-icon');
        projectItem.appendChild(projectItemIcon);
        projectItemIcon.textContent = '!';
        // Project Item Title
        const projectItemTitle = document.createElement('div');
        projectItemTitle.classList.add('project-item-title');
        projectItem.appendChild(projectItemTitle);
        projectItemTitle.textContent = projectUnits.title;
        // Project Item Number
        const projectItemNumber = document.createElement('div');
        projectItemNumber.classList.add('project-item-number');
        projectItem.appendChild(projectItemNumber);
        projectItemNumber.textContent = 5;
    }

    generateSidebarElements(createOptionFunction, createProjectFunction);
}

export default sideBar;