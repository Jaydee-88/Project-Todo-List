import { FormDisplay } from "./form-app";
import { EditForm } from "./edit-form-app";

class LeftUI {
  constructor(dataTitle) {
    this.leftNavScreen = document.querySelector("#nav--screen");
    this.headingLogo = document.createElement("h1");
    this.headingProjects = document.createElement("h1");
    this.headingTeams = document.createElement("h1");
    this.default = document.createElement("div");
    this.default.setAttribute("data-custom", "default--ui");

    this.projectHolder = document.createElement("div");
    this.teamHolder = document.createElement("div");

    this.arrayTodoTest = [
      "Default",
      "Finish PROJECT!",
      "Find Job and Track",
      "Learn Liquid Basics",
    ];

    this.logoAndHeaders();
    this.leftUIcontents(this.arrayTodoTest);
  }

  logoAndHeaders() {
    const newTaskButton = document.createElement("button");
    newTaskButton.setAttribute("data-custom", "addNewTask");
    const newTaskSvg = document.createElement("h3");
    const newTaskText = document.createElement("h3");
    newTaskSvg.textContent = "+";
    newTaskText.textContent = "Add Task";
    newTaskButton.appendChild(newTaskSvg);
    newTaskButton.appendChild(newTaskText);
    newTaskButton.classList.add("newTaskButton");

    this.headingLogo.textContent = "LOGO";
    this.headingLogo.classList.add("logo");

    this.leftNavScreen.appendChild(this.headingLogo);
    this.leftNavScreen.appendChild(newTaskButton);

    this.headingProjects.textContent = "Projects";
    this.headingTeams.textContent = "Teams";

    this.projectHolder.appendChild(this.headingProjects);
    this.projectHolder.classList.add("projects");

    this.teamHolder.appendChild(this.headingTeams);
    this.teamHolder.classList.add("projects");

    this.leftNavScreen.appendChild(this.projectHolder);
    this.leftNavScreen.appendChild(this.teamHolder);
  }

  leftUIcontents(todosArray) {
    const listsOfTodosHolder = document.createElement("ul");
    listsOfTodosHolder.classList.add("projects-ul");

    for (let i = 0; i < todosArray.length; i++) {
      const todosLists = document.createElement("li");
      const buttonProjects = document.createElement("button");
      todosLists.classList.add("list-items");
      buttonProjects.textContent = todosArray[i];
      todosLists.appendChild(buttonProjects);
      listsOfTodosHolder.appendChild(todosLists);
    }

    this.projectHolder.appendChild(listsOfTodosHolder);
  }
}

export class RightUI {
  constructor(leftData, rightData) {
    this.leftUI = new LeftUI(); // Composition: Use LeftUI inside RightUI
    this.rightContentScreen = document.querySelector("#display--screen");
    this.projectSections = document.createElement("div");
    this.projectSections.setAttribute("data-custom", "project-task");
    this.projectSections.classList.add("project-task");

    // Put here the data from index
    this.titleTaskData = [
      {
        title: "Preparation for Powerpoint",
        tasks: ["Make 3 slides for SEO"],
      },
      {
        title: "Study SEO in-depth",
        tasks: ["Learn the fundamentals"],
      },
      {
        title: "Workout Routine",
        tasks: ["Make a 7-day week plan with 2 rest days"],
      },
      {
        title: "Study Plan",
        tasks: ["Learn IELTS", "Learn Python"],
      },
    ];

    this.projectInformation = {
      date: "Today",
      title: "Title",
      description:
        "The description is here, try to find a way for users to edit this and make a button besides the title to edit.",
    };

    this.renderHeaderDisplay(this.createDisplays());
    this.renderProjectDisplay(this.titleTaskData);

    // Form Related
    this.renderForm(this.titleTaskData);
    this.renderEditForm();
  }

  createDisplays() {
    const projectInformation = this.createElement("div", "project-info", null);
    const titleAndButton = this.createElement("div", "title-and-button", null);

    const titleDisplay = this.createElement(
      "h1",
      "title--ui",
      this.projectInformation.title
    );
    titleAndButton.append(titleDisplay, this.editButton());
    const dateDisplay = this.createElement(
      "h2",
      "date--ui",
      this.projectInformation.date
    );
    const descriptionDisplay = this.createElement(
      "p",
      "description--ui",
      this.projectInformation.description
    );

    projectInformation.append(dateDisplay, titleAndButton, descriptionDisplay);
    // projectInformation.addEventListener("click", function () {
    //   console.log("edit me");
    // });
    return projectInformation;
  }

  renderHeaderDisplay(div) {
    this.rightContentScreen.append(div);
  }

  createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    return element;
  }

  renderProjectDisplay(data) {
    this.projectSections.innerHTML = "";

    data.forEach((project) => {
      const projectDisplaySection = document.createElement("div");
      projectDisplaySection.classList.add("project-section--ui");
      projectDisplaySection.setAttribute("data-custom", "task--title");

      const projectDisplayTitle = this.createElement("h3", null, project.title);
      const projectDisplayTitleHolder = document.createElement("div");
      projectDisplayTitleHolder.append(projectDisplayTitle, this.editButton());
      projectDisplayTitleHolder.classList.add("project-sub-title");

      const projectDisplayTaskHolder = document.createElement("div");
      projectDisplayTaskHolder.classList.add("tasks-display--ui");

      project.tasks.forEach((task) => {
        const taskLabel = this.createTaskLabel(task);
        projectDisplayTaskHolder.appendChild(taskLabel);
      });
      projectDisplaySection.append(
        projectDisplayTitleHolder,
        projectDisplayTaskHolder
      );
      this.projectSections.appendChild(projectDisplaySection);
    });

    this.rightContentScreen.appendChild(this.projectSections);
  }

  createTaskLabel(task) {
    const label = document.createElement("label");
    const checkbox = this.createElement("input", "input--ui");
    checkbox.type = "checkbox";
    const labelText = this.createElement("p", null, task);

    label.append(checkbox, labelText, this.editButton());
    return label;
  }

  editButton() {
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.id = "editBtn";

    return editBtn;
  }

  renderForm(data) {
    new FormDisplay(data, this.renderProjectDisplay.bind(this, data));
  }

  renderEditForm() {
    new EditForm();
  }
}
