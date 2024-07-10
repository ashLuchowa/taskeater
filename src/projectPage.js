const projectPage = (createOptionFunction) => {
    // Option List
    class Options {
        constructor(title, description, dueDate, priority, icon) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.icon = icon;
        }

        static option001 = new Options('Implement skeleton structure', 'Create github repo, clone to desktop, create basic HTML/CSS/JS files.', 'today', '1st', '!');
        static option002 = new Options('Finish up visual css style', 'Use UI/UX practices to make the website appealing.', 'today', '2nd', '!');
        static option003 = new Options('Link JavaScript', 'Create fade-in effect when scrolling down.', 'option003', 'today', '1st', '!');

        static optionList = [Options.option001, Options.option002, Options.option003];
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
}

export default projectPage;