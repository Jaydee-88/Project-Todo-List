"use strict";

import { CreateForm } from "./form-app";
import { AddTask, AddProject } from "./form-app";

class ProjectManager {}

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

// Try to use composition as much as possible

// IF Project with ID 1 is clicked, the tasks of it should be displayed.
// the add Task button should only add tasks base on what project is clicked.

// try find method
// try === method
// use a switcher or let to change the variable base on ID (Currently using)

// need to solve minor bug as why does the form duplicate.
