import { FormDisplay } from "./form-app";
import { EditForm, EditFormFix } from "./edit-form-app";

class LeftUI {
  constructor(data) {
    this.data = data;
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

  get dataExtracted() {
    // If pressed return data here from the LEFTUI
    return "picked data to be here";
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
    // this.leftNavScreen.appendChild(newTaskButton);

    this.headingProjects.textContent = "Projects";
    this.headingTeams.textContent = "Teams";

    this.projectHolder.appendChild(this.headingProjects);
    this.projectHolder.classList.add("projects");

    this.teamHolder.appendChild(this.headingTeams);
    this.teamHolder.classList.add("projects");

    this.leftNavScreen.appendChild(this.projectHolder);
    this.leftNavScreen.appendChild(this.teamHolder);
  }

  // Extract Projects here
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
  constructor(data) {
    this.data = new LeftUI(data).dataExtracted; // Composition: Use LeftUI inside RightUI
    this.rightContentScreen = document.querySelector("#display--screen");
    this.projectSections = document.createElement("div");
    this.projectSections.setAttribute("data-custom", "project-task");
    this.projectSections.classList.add("project-task");

    // Put here the data from index
    this.projectInformation = {
      date: "Today",
      title: "Title",
      description:
        "The description is here, try to find a way for users to edit this and make a button besides the title to edit.",
    };

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

    this.render();

    // Form Related
    this.editButtons = new EditFormFix(
      this.projectInformation,
      this.titleTaskData,
      this.render
    );
    this.renderForm(this.titleTaskData);
    this.test();
    // this.renderEditForm(this.projectInformation, this.titleTaskData);
  }

  test() {
    console.log(this.data);
  }

  render() {
    // Render header
    const header = this.renderHeaderDisplays(this.projectInformation);
    this.rightContentScreen.append(header);

    // Render project display
    this.renderProjectDisplay(this.titleTaskData);
  }

  renderHeaderDisplays(data) {
    const projectInformation = this.createElement("div", "project-info", null);
    const titleAndButton = this.createElement("div", "title-and-button", null);

    const titleDisplay = this.createElement("h1", "title--ui", data.title);
    titleAndButton.append(titleDisplay, this.editButton());
    const dateDisplay = this.createElement("h2", "date--ui", data.date);
    const descriptionDisplay = this.createElement(
      "p",
      "description--ui",
      data.description
    );
    const addTaskButton = this.createElement(
      "button",
      "add-task--ui",
      "Add Task"
    );
    addTaskButton.classList.add("add-task-button");
    addTaskButton.setAttribute("data-custom", "addNewTask");

    projectInformation.append(
      dateDisplay,
      titleAndButton,
      descriptionDisplay,
      addTaskButton
    );

    return projectInformation;
  }

  renderHeader(div) {
    this.rightContentScreen.append(div);
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

  createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    return element;
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

  renderEditForm(data, data2) {
    new EditForm(
      this.projectInformation,
      this.renderHeaderDisplays.bind(this, data),
      data2
    );
  }
}

class NavBar {
  renderHeader() {
    // Create Logo
    // Create NAV for buttons
  }
}

class NewLeftUI {
  // Create a button here base on the tasks. if its "Today" put it in the today group. if it is Complete put it in the complete group, etc. and render those tasks. they can check, delete and edit those task. 

  displayLeftProjects() {
    // display here the projects as tabs
    console.log("Render Data using the NewRightUI");
  }

  displayAddProjectButton() {
    // Add Project Button. push it onto the object data.
    console.log("Display Add Project Button");
  }
}

class NewRightUI extends NewLeftUI {
  constructor(data) {
    this.data = data;
  }

  renderTitle() {
    console.log("Render Title");
  }

  renderDescription() {
    console.log("Render Description");
  }

  renderTasks() {
    console.log("Render Tasks");
  }

  displayAddTask() {
    console.log("Display Add Task");
  }
}

class RENDER {}

class FilterButton {
  // First Clear HTML then;
  // filter the data then render it if button is pressed.
  // if not just use normal render.
}
