import './style.scss';
import _ from 'lodash';

class Projects {
    constructor(title, description, task) {
        this.title = title;
        this.description = description;
        this.task = task;
    }
}

let project001 = new Projects('Implement skeleton structure', 'Create github repo, clone to desktop, create basic HTML/CSS/JS files.', 'task001');

const projectList = [project001];

console.log(project001.title);