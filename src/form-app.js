// extend here the RightUi class and implement the form
import { RightUI } from "./todo-ui";

class FormDisplay extends RightUI {
  constructor(data) {
    super(data);
    this.form = this.createForm();
    this.submitTask();
    this.renderForm();
  }

  submitTask() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Accessing input values
      const titleInput = this.form.querySelector('input[placeholder="Title"]');
      const taskInput = this.form.querySelector('input[placeholder="Task"]');
      const taskDiv = document.querySelector(".project-task");
      taskDiv.innerHTML = ""; // Prevent Duplication

      const titleAnswer = titleInput.value;
      const taskAnswer = taskInput.value;

      console.log(titleAnswer);

      this.projectDisplaySubTitle.forEach((el) => {
        if (el.title === titleAnswer) {
          el.tasks.push(taskAnswer);
        }
      });

      this.renderProjectDisplay();

      // Optionally, clear the inputs or perform other actions
      titleInput.value = "";
      taskInput.value = "";
      this.form.classList.add("hidden");
    });
  }

  createForm() {
    const form = document.createElement("form");
    form.classList.add("form");

    // Composing form elements
    const formElements = [
      this.createFormTitle("Add your Task"),
      this.createInput("text", "Title"),
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

  createInput(type, placeholder, value) {
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
    return button;
  }

  renderForm(title) {
    const addTaskButton = document.querySelector('[data-custom="addNewTask"]');
    addTaskButton.addEventListener("click", () => {
      this.form.classList.remove("hidden");
      return this.form;
    });
  }
}

new FormDisplay();
