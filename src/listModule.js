// let allList = Array();
import { projectsController } from "./projectController";

const currentProject = (function () {
    const addList = (list) => {
        projectsController.current().push(list);
        updateToDoId();
    };

    const deleteList = (listId) => {
        projectsController.current().splice(listId, 1);
        updateToDoId();
    };
    return {
        addList,
        deleteList,
    };
})();

function updateToDoId() {
    projectsController.current().forEach((list, index) => {
        list.id = index;
    });
}

const toDo = (function () {
    class toDoList {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }

        editTitle(newTitle) {
            this.title = newTitle;
        }

        editDescription(newDescription) {
            this.description = newDescription;
        }

        editDueDate(newDueDate) {
            this.dueDate = newDueDate;
        }

        editPriority(newPriority) {
            this.priority = newPriority;
        }
    }
    const createList = (title, description, dueDate, priority) => {
        currentProject.addList(
            new toDoList(title, description, dueDate, priority)
        );
    };

    const deleteList = (listId) => currentProject.deleteList(listId);

    return {
        createList,
        deleteList,
    };
})();

export default toDo;

export { currentProject, projectsController };
