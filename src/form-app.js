// Global this.renderProjectDisplay(); and this.projectDisplaySubTitle()

export class FormDisplay {
  constructor(data, render) {
    this.data = data;
    this.render = render;
    this.form = this.createForm();

    this.submitTask();
    this.renderForm();

  }

  submitTask() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Accessing input values
      const titleInput = this.form.querySelector("#selector");
      const taskInput = this.form.querySelector('input[placeholder="Task"]');

      const titleAnswer = titleInput.value;
      const taskAnswer = taskInput.value;

      if (titleAnswer === "-- Please Choose an Option --") {
        titleAnswer.value === "";
        this.render();
        return;
      }

      this.data.forEach((el) => {
        if (el.title === titleAnswer) {
          el.tasks.push(taskAnswer);
        }
      });

      this.render();

      // Clear the inputs or perform other actions
      titleInput.value = "-- Please Choose an Option --";
      taskInput.value = "";
      this.form.classList.add("hidden");

      return this.data;
    });
  }

  createForm() {
    let existingForm = document.querySelector(".form");
    if (existingForm) {
      return existingForm; // Return the existing form
    }

    const form = document.createElement("form");
    form.classList.add("form", "hidden");

    // Composing form elements
    const formElements = [
      this.createFormTitle("Add your Task"),
      this.createSelect(this.data),
      this.createInput("text", "Task"),
      this.createButton("Submit"),
    ];

    // Display the Title, Inputs, and Submit button in the array.
    formElements.forEach((element) => form.appendChild(element));

    document.querySelector("#main-page").appendChild(form);
    return form;
  }

  createFormTitle(text) {
    const title = document.createElement("h2");
    title.textContent = text;
    return title;
  }

  createSelect(array) {
    const select = document.createElement("select");
    const defaultText = "-- Please Choose an Option --";
    const option = document.createElement("option");
    select.id = "selector";
    select.required = true;

    option.append(defaultText);
    select.append(option);

    if (array) {
      array.forEach((el) => {
        const option = document.createElement("option");
        option.append(el.title);
        select.append(option);
      });
    }

    return select;
  }

  createInput(type, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.required = true;
    return input;
  }

  createButton(text) {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = text;
    button.id = "createTask";
    return button;
  }

  renderForm() {
    const addTaskButton = document.querySelector('[data-custom="addNewTask"]');
    addTaskButton.addEventListener("click", () => {
      this.form.classList.remove("hidden");
      return this.form;
    });
  }
}
