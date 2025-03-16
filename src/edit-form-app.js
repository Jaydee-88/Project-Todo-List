export class EditForm {
  constructor(data, render, data2) {
    this.data = data;
    this.render = render;
    this.data2 = data2;
    this.currentPromptElement = null; // Initialize here
    this.currentPromptInformation = [];
    this.form = this.createForm();
    this.form2 = this.createInformationForm();
    this.editButtonLogic(); // Set up the edit button logic
  }

  editButtonLogic() {
    const editBtns = document.querySelectorAll("#editBtn");
    editBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const taskInput = this.form.querySelector("input");
        this.form.classList.remove("hidden");

        const dateInput = this.form2.querySelector("#date-input");
        const titleInput = this.form2.querySelector("#title-input");
        const descriptionInput = this.form2.querySelector("#description-input");

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

          Object.entries(this.data).forEach(([key, value]) => {
            if (key === "date") {
              const datePlaceHolder = value;
              dateInput.value = datePlaceHolder;
            }
            if (key === "title") {
              const titlePlaceHolder = value;
              titleInput.value = titlePlaceHolder;
            }
            if (key === "description") {
              const descriptionPlaceHolder = value;
              descriptionInput.value = descriptionPlaceHolder;
            }
          });
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
        console.log(this.data2);
      }

      // Clear the input and hide the form
      taskInput.value = "";
      this.form.classList.add("hidden");
      this.currentPromptElement = null; // Clear reference after submission
    });

    this.form2.addEventListener("submit", (e) => {
      e.preventDefault();
      const dateInput = this.form2.querySelector("#date-input");
      const titleInput = this.form2.querySelector("#title-input");
      const descriptionInput = this.form2.querySelector("#description-input");
      // const updatedTask = taskInput.value;
      const main = (document.querySelector(".project-info").innerHTML = "");

      // Update the paragraph text with the new value
      if (this.currentPromptInformation) {
        this.data.date = "bitch date";
      }

      this.render();

      // Clear the input and hide the form
      dateInput.value = "";
      titleInput.value = "";
      descriptionInput.value = "";
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
      this.createInput("text", "Edit your task...", "date-input"),
      this.createInput("text", "Edit your task...", "title-input"),
      this.createInput("text", "Edit your task...", "description-input"),
      this.createButton("Submit"),
    ];

    formInformation.forEach((element) => form.appendChild(element));
    document.querySelector("#main-page").appendChild(form);

    return form;
  }

  createInput(type, placeholder, id) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.id = id;
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

export class EditFormFix {
  constructor(informationData, tasksData, render) {
    this.informationData = informationData;
    this.tasksData = tasksData;
    this.render = render;

    this.editObjects();
  }

  editObjects() {
    const editBtns = document.querySelectorAll("#editBtn");

    editBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        const labelsForHeaders = button.closest(".project-info");
        const labelForTitle = button.closest(".project-sub-title");
        const labelForTask = button.closest("label");
        const editTitle = labelForTitle
          ? labelForTitle.querySelector("h3")
          : null;
        const editTask = labelForTask ? labelForTask.querySelector("p") : null;

        // show form
        console.log("clicked");

        // Find the task to edit
        if (editTask) {
          this.tasksData.forEach((el) => {
            const taskIndex = el.tasks.indexOf(editTask.textContent);

            // If the task is found, update it. Once the button its press its index is 0
            if (taskIndex !== -1) {
              el.tasks[taskIndex] = "Learn SEO"; // Change the task to the new value
              console.log(`Task changed to: ${el.tasks[taskIndex]}`);
              console.log(this.tasksData); // Output the updated tasksData
              // this.render();
            }
          });
        }
      });
    });
  }

  renderAndSubmit() {
    const rightScreen = document.querySelector("#display--screen");
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
}

//
