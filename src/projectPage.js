const projectPage = () => {
    // Task List
    class Tasks {
        constructor(title, description, dueDate, priority, icon) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.icon = icon;
        }
    }

    let task001 = new Tasks('Implement skeleton structure', 'Create github repo, clone to desktop, create basic HTML/CSS/JS files.', 'today', '1st', '!');
    let task002 = new Tasks('Finish up visual css style', 'Use UI/UX practices to make the website appealing.', 'today', '2nd', '!');
    let task003 = new Tasks('Link JavaScript', 'Create fade-in effect when scrolling down.', 'task003', 'today', '1st', '!');

    const taskList = [task001, task002, task003];


    // Project List
    class Projects {
        constructor(title, description, task, icon) {
            this.title = title;
            this.description = description;
            this.task = task;
            this.icon = icon;
        }
    }

    let project001 = new Projects('Portfolio 2024', 'I am working on this portfolio which will help me in finding a job.', taskList, '!');
    let project002 = new Projects('Cleaning July', 'I have to clean the house before Christmas in July.', taskList, '!');
    let project003 = new Projects('Link JavaScript', 'Create fade-in effect when scrolling down.', taskList, '!');

    const projectList = [project001, project002, project003];
}

export default projectPage;