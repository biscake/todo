let allList = Array();

const listArray = (function() {
    const addList = (list) => {
        allList.push(list);
    }

    const deleteList = (listId) => {
        allList.splice(listId, 1);
    }
    return {
        addList,
        deleteList,
    }
})();

const List = (function() {
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
        listArray.addList(new toDoList(title, description, dueDate, priority));
    }

    const deleteList = (listId) => listArray.deleteList(listId);

    return {
        createList,
        deleteList,
    }
})();



export default List;

export { allList };