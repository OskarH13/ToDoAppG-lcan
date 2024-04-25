

// Definition des Todo-Objekts
interface Todo {
    id: number;
    todo: string;
    deadline: Date;
    assignee: string;
    owner: string;
    status: TodoStatus;
  }
  
  // Enum für den Status des Todos
  enum TodoStatus {
    NOT_STARTED = "not started",
    IN_PROGRESS = "in progress",
    READY_FOR_REVIEW = "ready for review",
    IN_REVIEW = "in review",
    DONE = "done"
  }
  
  export { Todo, TodoStatus };
  