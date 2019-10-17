"use strict";
/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task, deadline, isComplete) {
        this.title = task;
        this.deadline = deadline;
        this.isComplete = isComplete;
    }
    return ToDoItem;
}());
//let myItem = new ToDoItem("Finish class");
