import projectPage from './projectPage.js';

const sideBar = () => {
    const sideBar = document.querySelector('.sidebar');

    //-- Logo --//
    const logoContainer = document.querySelector('.logo-container');
    logoContainer.textContent = 'TaskEater';
    sideBar.appendChild(logoContainer);

    //-- Option Container --//
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
    const randomFunction = (optionUnits) => {
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
        optionItemNumber.textContent = 5;
    }


    

    projectPage(randomFunction);
}

export default sideBar;