import { forEach } from 'lodash';
import createPageElement from './createPageElement.js';

const generateSidebarElements = (createOptionFunction, createProjectFunction) => {
    //-------- Generate Option ---------//
    class Options {
        constructor(title, dueDate, icon, number) {
            this.title = title;
            this.dueDate = dueDate;
            this.icon = icon;
            this.number = number;
        }

        static option001 = new Options('All Tasks', '', '!', 5);
        static option002 = new Options('Today', 'today', '!', 1);
        static option003 = new Options('Tomorrow', 'tomorrow', '!', 3);
        static option004 = new Options('Overdue', 'overdue', '!', 2);

        static optionList = [Options.option001, Options.option002, Options.option003, Options.option004];
    }

    Options.optionList.forEach(optionUnits => {
        createOptionFunction(optionUnits);
    });


    //-------- Generate Projects ---------//
    class Projects {
        constructor(title, description, task, icon) {
            this.title = title;
            this.description = description;
            this.task = task;
            this.icon = icon;
        }

        static project001 = new Projects('Portfolio 2024', 'I am working on this portfolio which will help me in finding a job.', Options.optionList, '!');
        static project002 = new Projects('Cleaning July', 'I have to clean the house before Christmas in July.', Options.optionList, '!');
        static project003 = new Projects('Link JavaScript', 'Create fade-in effect when scrolling down.', Options.optionList, '!');

        static projectList = [Projects.project001, Projects.project002, Projects.project003];
    }

    Projects.projectList.forEach(projectUnits => {
        createProjectFunction(projectUnits);
    });
    
    // Generate Project Pages
    let target = document.querySelectorAll('.project-list-container');
    target.forEach(item => {
        item.addEventListener('click', (e) => {{
            createPageElement(e);
        }})
    })
}

export default generateSidebarElements;