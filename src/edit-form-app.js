export class EditForm {
  constructor(data, editBtn) {
    this.data = data;
    this.editBtn = editBtn;
    this.currentPromptElement = null; // Initialize here
    this.currentPromptInformation = null;
    this.form = this.createForm();
    this.form2 = this.createInformationForm();
    this.editButtonLogic(); // Set up the edit button logic
  }

  currentPromptHeaderElement() {}

  editButtonLogic() {
    const editBtns = document.querySelectorAll("#editBtn");
    editBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const taskInput = this.form.querySelector("input");
        this.form.classList.remove("hidden");

        const labelForTask = button.closest("label");
        const labelForTitle = button.closest(".project-sub-title");
        const labelsForHeaders = button.closest(".project-info");
        const paragraph = labelForTask ? labelForTask.querySelector("p") : null;
        const title = labelForTitle ? labelForTitle.querySelector("h3") : null;

        if (paragraph) {
          taskInput.value = paragraph.textContent; // Pre-fill the input
          this.currentPromptElement = paragraph; // Store the current task element
        }

        if (title) {
          taskInput.value = title.textContent;
          this.currentPromptElement = title;
        }
        this.submitTask(); // Set up the submit

        if (labelsForHeaders) {
          this.form.classList.add("hidden");
          this.form2.classList.remove("hidden");
          this.currentPromptInformation = "hello";
          console.log(this.currentPromptInformation);
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
      if (this.currentPromptElement) {
        this.currentPromptElement.textContent = updatedTask;
      }

      if (this.currentPromptInformation) {
        console.log("test");
      }

      // Clear the input and hide the form
      taskInput.value = "";
      this.form.classList.add("hidden");
      this.currentPromptElement = null; // Clear reference after submission
    });

    this.form2.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskInput = this.form.querySelector("input");
      const updatedTask = taskInput.value;

      // Update the paragraph text with the new value
      if (this.currentPromptElement) {
        this.currentPromptElement.textContent = updatedTask;
      }

      if (this.currentPromptInformation) {
        console.log("test");
      }

      // Clear the input and hide the form
      taskInput.value = "";
      this.form2.classList.add("hidden");
      this.currentPromptElement = null; // Clear reference after submission
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

  createInformationForm() {
    const form = document.createElement("form");
    form.classList.add("edit-form", "hidden");

    const formInformation = [
      this.createInput("text", "Edit your task..."),
      this.createInput("text", "Edit your task..."),
      this.createInput("text", "Edit your task..."),
      this.createButton("Submit"),
    ];

    formInformation.forEach((element) => form.appendChild(element));
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
