class Task {
  constructor(name, description, due, priority, completed) {
    this.name = name;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.completed = completed;
  }

  get data() {
    return {
      name: this.name,
      description: this.description,
      due: this.due,
      priority: this.priority,
      completed: this.completed,
    };
  }
}

const taskTest = new Task("test", "test", "test", "test", "test");
console.log(taskTest.data);

class TaskData {
  constructor() {}
}

class TaskManager {
  constructor(createTask, deleteTask, editTask) {
    this.tasks = [];
  }

  createTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  editTask(taskId, updatedTask) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      Object.assign(task, updatedTask);
    }
  }

  organizeTasks() {
    // Logic to organize tasks into "Today", "Complete", etc.
    return {
      today: this.tasks.filter((task) => task.status === "Today"),
      complete: this.tasks.filter((task) => task.status === "Complete"),
    };
  }
}

function createTask() {}
function deleteTask() {}
function editTask() {}

class ClassTest {
  constructor(value, number) {
    this.value = value;
    this.number = number;
  }

  displayText() {
    return `${this.value}`;
  }

  get text() {
    return this.displayText();
  }
}
export const displayText = new ClassTest("hello").text;
