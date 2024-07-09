const projectPage = (randomFunction) => {
    // Task List
    class Tasks {
        constructor(title, description, dueDate, priority, icon) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.icon = icon;
        }

        static task001 = new Tasks('Implement skeleton structure', 'Create github repo, clone to desktop, create basic HTML/CSS/JS files.', 'today', '1st', '!');
        static task002 = new Tasks('Finish up visual css style', 'Use UI/UX practices to make the website appealing.', 'today', '2nd', '!');
        static task003 = new Tasks('Link JavaScript', 'Create fade-in effect when scrolling down.', 'task003', 'today', '1st', '!');

        static taskList = [Tasks.task001, Tasks.task002, Tasks.task003];
    }

    Tasks.taskList.forEach((taskUnits) => {
        randomFunction(taskUnits);
        console.log(taskUnits.title);
    });


    // Project List
    class Projects {
        constructor(title, description, task, icon) {
            this.title = title;
            this.description = description;
            this.task = task;
            this.icon = icon;
        }

        static project001 = new Projects('Portfolio 2024', 'I am working on this portfolio which will help me in finding a job.', Tasks.taskList, '!');
        static project002 = new Projects('Cleaning July', 'I have to clean the house before Christmas in July.', Tasks.taskList, '!');
        static project003 = new Projects('Link JavaScript', 'Create fade-in effect when scrolling down.', Tasks.taskList, '!');

        static projectList = [Projects.project001, Projects.project002, Projects.project003];
    }
}

export default projectPage;