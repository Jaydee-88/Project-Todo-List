"use strict";

export class Task {
  constructor(name, description, due, priority, completed) {
    this.name = name;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.completed = completed;
    this.id = 0;
  }

  get data() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      due: this.due,
      priority: this.priority,
      completed: this.completed,
    };
  }
}
export class AddTask {
  constructor(btn, task, data) {
    this.btn = btn;
    this.task = task;
    this.data = data;
  }

  pushData() {
    this.btn.addEventListener("click", () => {
      if (this.data.at(-1).id === 0) {
        this.task.id++;
      } else if (this.data.at(-1).id) {
        this.task.id++;
      }
      this.data.push(this.task);
      console.log(this.data);
    });
  }
}
export class EditTask {}

// Div = id(task) then cascade
