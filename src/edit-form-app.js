export class EditForm {
  constructor(data, editBtn) {
    this.data = data;
    this.editBtn = editBtn;
    this.form = this.createForm();
    this.currentTaskElement = null; // Initialize here
    this.submitTask(); // Set up the submit listener
    this.editButtonLogic(); // Set up the edit button logic
  }

  editButtonLogic() {
    const editBtns = document.querySelectorAll("#editBtn");
    editBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const taskInput = this.form.querySelector("input");
        this.form.classList.remove("hidden");

        const labelForTask = button.closest("label");
        const paragraph = labelForTask ? labelForTask.querySelector("p") : null;

        if (paragraph) {
          taskInput.value = paragraph.textContent; // Pre-fill the input
          this.currentTaskElement = paragraph; // Store the current task element
        }
      });
    });
  }

  submitTask() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskInput = this.form.querySelector("input");
      const updatedTask = taskInput.value;

      // Update the paragraph text with the new value
      if (this.currentTaskElement) {
        this.currentTaskElement.textContent = updatedTask;
      }

      // Clear the input and hide the form
      taskInput.value = "";
      this.form.classList.add("hidden");
      this.currentTaskElement = null; // Clear reference after submission
    });
  }

  createForm() {
    const form = document.createElement("form");
    form.classList.add("edit-form", "hidden");

    const formElements = [
      this.createInput("text", "Edit your task..."),
      this.createButton("Submit"),
    ];

    formElements.forEach((element) => form.appendChild(element));
    document.querySelector("#main-page").appendChild(form);

    return form;
  }

  createInput(type, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    return input;
  }

  createButton(text) {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = text;
    button.id = "createTask";
    return button;
  }
}

// export class EditForm {
//   constructor(data, editBtn) {
//     this.data = data;
//     this.editBtn = editBtn;
//     this.form = this.createForm();
//     this.currentTaskElement = null; // Initialize here
//     this.submitTask(); // Set up the submit listener
//     this.editButtonLogic(); // Set up the edit button logic
//   }

//   editButtonLogic() {
//     const editBtns = document.querySelectorAll("#editBtn");
//     editBtns.forEach((button) => {
//       button.addEventListener("click", (e) => {
//         const taskInput = this.form.querySelector("input");
//         this.form.classList.remove("hidden");

//         const labelForTask = button.closest("label");
//         const paragraph = labelForTask ? labelForTask.querySelector("p") : null;

//         if (paragraph) {
//           taskInput.value = paragraph.textContent; // Pre-fill the input
//           this.currentTaskElement = paragraph; // Store the current task element
//         }
//       });
//     });
//   }

//   submitTask() {
//     this.form.addEventListener("submit", (e) => {
//       e.preventDefault();

//       const taskInput = this.form.querySelector("input");
//       const updatedTask = taskInput.value;

//       // Update the paragraph text with the new value
//       if (this.currentTaskElement) {
//         this.currentTaskElement.textContent = updatedTask;
//       }

//       // Clear the input and hide the form
//       taskInput.value = "";
//       this.form.classList.add("hidden");
//       this.currentTaskElement = null; // Clear reference after submission
//     });
//   }

//   createForm() {
//     const form = document.createElement("form");
//     form.classList.add("edit-form", "hidden");

//     const formElements = [
//       this.createInput("text", "Edit your task..."),
//       this.createButton("Submit"),
//     ];

//     formElements.forEach((element) => form.appendChild(element));
//     document.querySelector("#main-page").appendChild(form);

//     return form;
//   }

//   createInput(type, placeholder) {
//     const input = document.createElement("input");
//     input.type = type;
//     input.placeholder = placeholder;
//     return input;
//   }

//   createButton(text) {
//     const button = document.createElement("button");
//     button.type = "submit";
//     button.textContent = text;
//     button.id = "createTask";
//     return button;
//   }
// }
