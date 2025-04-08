"use strict";

//  title: "Test the application",
//         date: "2025-02-28",
//         status: false,
//         description: "Test application and check if it is working.",
//         priority: "High",
//         id: 1,

export class Task {
  constructor(title, date, status, description, priority) {
    this.title = title;
    this.date = date;
    this.status = status;
    this.description = description;
    this.priority = priority;
    this.id = 0;
  }

  get data() {
    return {
      id: this.id,
      title: this.title,
      date: this.date,
      status: this.status,
      description: this.description,
      priority: this.priority,
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
      const latestCounter = this.data.at(-1).id;
      // console.log(this.data.length, this.data);

      // if the task is latest, push data and update task id

      if (this.data.at(-1).id === latestCounter) {
        this.task.id++;
      }

      console.log(this.task);
      return this.data.at(-1);
    });
  }
}
export class EditTask {
  constructor(btn, task, data) {
    this.btn = btn;
    this.task = task;
    this.data = data;
  }

  editData() {
    // if id=== task.id
    // edit that object

    this.btn.addEventListener("click", () => {});
  }
}

// Div = id(task) then cascade

const testObject = {
  id: 1,
};
