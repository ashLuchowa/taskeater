const projectPage = (createOptionFunction, createProjectFunction) => {
    // Option List
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

    Options.optionList.forEach((optionUnits) => {
        createOptionFunction(optionUnits);
        console.log(optionUnits.title);
    });


    // Project List
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

    Projects.projectList.forEach((projectUnits) => {
        createProjectFunction(projectUnits);
        console.log(projectUnits.title);
    });
}

export default projectPage;