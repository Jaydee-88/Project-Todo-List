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

export class CreateForm {
  constructor(clTask, data) {
    this.task = clTask;
    this.data = data;
    this.form = this.createForm();
  }

  createForm() {
    const rightScreen = document.querySelector("#display--screen");
    const form = document.createElement("form");
    form.classList.add("form");

    const titleInput = this.createInput("text", "Title");
    titleInput.id = "title-form";
    const dateInput = this.createInput("date", "Date");
    dateInput.id = "date-form";
    const statusInput = this.createInput("checkbox", "Status");
    statusInput.id = "status-form";
    const descriptionInput = this.createInput("text", "Description");
    descriptionInput.id = "description-form";
    const priorityInput = this.createSelect();
    priorityInput.id = "priority-form";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    const testText = document.createElement("p");
    testText.textContent = "Test Text";

    form.append(
      titleInput,
      dateInput,
      statusInput,
      descriptionInput,
      priorityInput,
      submitButton
    );

    rightScreen.appendChild(form);
    return form;
  }

  submitForm() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = this.form.querySelector("#title-form").value;
      const date = this.form.querySelector("#date-form").value;
      const status = this.form.querySelector("#status-form").checked;
      const description = this.form.querySelector("#description-form").value;
      const priority = this.form.querySelector("#priority-form").value;

      const task = { title, date, status, description, priority };
      this.data.push(task);
      this.form.classList.add("hidden");

      console.log(this.data);
      return;
    });
  }

  // Helpers
  createInput(type, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    // input.required = true;
    return input;
  }
  createSelect() {
    const select = document.createElement("select");
    const options = ["Low", "Medium", "High"];

    options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.toLowerCase();
      option.textContent = item;
      select.appendChild(option);
    });

    return select;
  }
}

export class AddTask extends CreateForm {
  constructor(clTask, data) {
    super(clTask, data);
    this.form = this.createForm();
    this.data = data;
    this.submitForm();
  }
}
