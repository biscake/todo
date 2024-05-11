// let allList = Array();
import { projectsController } from "./projectController";

const currentProject = (function () {
    const addToCurrent = (toDo) => {
        projectsController.current().push(toDo);
        updateToDoId();
    };

    const deleteFromCurrent = (toDoId) => {
        projectsController.current().splice(toDoId, 1);
        updateToDoId();
    };
    return {
        addToCurrent,
        deleteFromCurrent,
    };
})();

function updateToDoId() {
    projectsController.current().forEach((toDo, index) => {
        toDo.id = index;
    });
}

const toDo = (function () {
    class toDoList {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.done = false;
        }

        updateToDo(newTitle, newDescription, newDueDate, newPriority) {
            this.title = newTitle;
            this.description = newDescription;
            this.dueDate = newDueDate;
            this.priority = newPriority;
        }

        toggleDone() {
            this.done = !this.done;
        }
    }
    const createToDo = (title, description, dueDate, priority) => {
        currentProject.addToCurrent(
            new toDoList(title, description, dueDate, priority)
        );
    };

    const deleteToDo = (listId) => currentProject.deleteFromCurrent(listId);

    return {
        createToDo,
        deleteToDo,
    };
})();

export default toDo;

export { projectsController };
