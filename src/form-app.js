// extend here the RightUi class and implement the form
import { RightUI } from "./todo-ui";

class FormDisplay extends RightUI {
  constructor(data) {
    super(data);

    this.formDisplay();
  }

  formDisplay() {
    // Create a form element
    const form = document.createElement("form");
    form.classList.add("form");
    // form.classList.add("hidden");

    const titleForm = document.createElement("h2");
    titleForm.textContent = "Add your Task";
    form.appendChild(titleForm);

    // Create the first input
    const input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Title";
    form.appendChild(input1);

    // Create the second input
    const input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Task";
    form.appendChild(input2);

    // Create a button
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit";
    form.appendChild(button);

    // Append the form to the body
    document.querySelector("#main-page").appendChild(form);

    this.projectDisplaySubTitle.forEach((el) => {
      console.log(el.title);
    });
  }

  renderTitleAndTasks() {
    // Task Rule
    const addTaskButton = document.querySelector('[data-custom="addNewTask"]');
    addTaskButton.addEventListener("click", () => {
      const testClick = document.querySelector(".project-task");
      console.log(testClick);
      testClick.innerHTML = "";

      this.projectDisplaySubTitle[3].tasks.push("Options");

      this.renderProjectDisplay();
    });
  }
}

new FormDisplay();
