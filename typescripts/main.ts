

/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    title:string;
    deadline:Date;
    isComplete:boolean;

    constructor(task:string, deadline:Date, isComplete:boolean){
        
        this.title = task;
        this.deadline = deadline;
        this.isComplete = isComplete;


    }
}

//let myItem = new ToDoItem("Finish class");
