import { FormDisplay } from "./form-app";
import { EditForm, EditFormFix } from "./edit-form-app";
import database from "./database.json";

// class LeftUI {
//   constructor(data) {
//     this.data = data;
//     this.leftNavScreen = document.querySelector("#nav--screen");
//     this.headingLogo = document.createElement("h1");
//     this.headingProjects = document.createElement("h1");
//     this.headingTeams = document.createElement("h1");
//     this.default = document.createElement("div");
//     this.default.setAttribute("data-custom", "default--ui");

//     this.projectHolder = document.createElement("div");
//     this.teamHolder = document.createElement("div");

//     this.arrayTodoTest = [
//       "Default",
//       "Finish PROJECT!",
//       "Find Job and Track",
//       "Learn Liquid Basics",
//     ];

//     this.logoAndHeaders();
//     this.leftUIcontents(this.arrayTodoTest);
//   }

//   get dataExtracted() {
//     // If pressed return data here from the LEFTUI
//     return "picked data to be here";
//   }

//   logoAndHeaders() {
//     const newTaskButton = document.createElement("button");
//     newTaskButton.setAttribute("data-custom", "addNewTask");
//     const newTaskSvg = document.createElement("h3");
//     const newTaskText = document.createElement("h3");
//     newTaskSvg.textContent = "+";
//     newTaskText.textContent = "Add Task";
//     newTaskButton.appendChild(newTaskSvg);
//     newTaskButton.appendChild(newTaskText);
//     newTaskButton.classList.add("newTaskButton");

//     this.headingLogo.textContent = "LOGO";
//     this.headingLogo.classList.add("logo");

//     this.leftNavScreen.appendChild(this.headingLogo);
//     // this.leftNavScreen.appendChild(newTaskButton);

//     this.headingProjects.textContent = "Projects";
//     this.headingTeams.textContent = "Teams";

//     this.projectHolder.appendChild(this.headingProjects);
//     this.projectHolder.classList.add("projects");

//     this.teamHolder.appendChild(this.headingTeams);
//     this.teamHolder.classList.add("projects");

//     this.leftNavScreen.appendChild(this.projectHolder);
//     this.leftNavScreen.appendChild(this.teamHolder);
//   }

//   // Extract Projects here
//   leftUIcontents(todosArray) {
//     const listsOfTodosHolder = document.createElement("ul");
//     listsOfTodosHolder.classList.add("projects-ul");

//     for (let i = 0; i < todosArray.length; i++) {
//       const todosLists = document.createElement("li");
//       const buttonProjects = document.createElement("button");
//       todosLists.classList.add("list-items");
//       buttonProjects.textContent = todosArray[i];
//       todosLists.appendChild(buttonProjects);
//       listsOfTodosHolder.appendChild(todosLists);
//     }

//     this.projectHolder.appendChild(listsOfTodosHolder);
//   }
// }

// export class RightUI {
//   constructor(data) {
//     this.data = new LeftUI(data).dataExtracted; // Composition: Use LeftUI inside RightUI
//     this.rightContentScreen = document.querySelector("#display--screen");
//     this.projectSections = document.createElement("div");
//     this.projectSections.setAttribute("data-custom", "project-task");
//     this.projectSections.classList.add("project-task");

//     // Put here the data from index
//     this.projectInformation = {
//       date: "Today",
//       title: "Title",
//       description:
//         "The description is here, try to find a way for users to edit this and make a button besides the title to edit.",
//     };

//     this.titleTaskData = [
//       {
//         title: "Preparation for Powerpoint",
//         tasks: ["Make 3 slides for SEO"],
//       },
//       {
//         title: "Study SEO in-depth",
//         tasks: ["Learn the fundamentals"],
//       },
//       {
//         title: "Workout Routine",
//         tasks: ["Make a 7-day week plan with 2 rest days"],
//       },
//       {
//         title: "Study Plan",
//         tasks: ["Learn IELTS", "Learn Python"],
//       },
//     ];

//     this.render();

//     // Form Related
//     this.editButtons = new EditFormFix(
//       this.projectInformation,
//       this.titleTaskData,
//       this.render
//     );
//     this.renderForm(this.titleTaskData);
//     this.test();
//     // this.renderEditForm(this.projectInformation, this.titleTaskData);
//   }

//   test() {
//     console.log(this.data);
//   }

//   render() {
//     // Render header
//     const header = this.renderHeaderDisplays(this.projectInformation);
//     this.rightContentScreen.append(header);

//     // Render project display
//     this.renderProjectDisplay(this.titleTaskData);
//   }

//   renderHeaderDisplays(data) {
//     const projectInformation = this.createElement("div", "project-info", null);
//     const titleAndButton = this.createElement("div", "title-and-button", null);

//     const titleDisplay = this.createElement("h1", "title--ui", data.title);
//     titleAndButton.append(titleDisplay, this.editButton());
//     const dateDisplay = this.createElement("h2", "date--ui", data.date);
//     const descriptionDisplay = this.createElement(
//       "p",
//       "description--ui",
//       data.description
//     );
//     const addTaskButton = this.createElement(
//       "button",
//       "add-task--ui",
//       "Add Task"
//     );
//     addTaskButton.classList.add("add-task-button");
//     addTaskButton.setAttribute("data-custom", "addNewTask");

//     projectInformation.append(
//       dateDisplay,
//       titleAndButton,
//       descriptionDisplay,
//       addTaskButton
//     );

//     return projectInformation;
//   }

//   renderHeader(div) {
//     this.rightContentScreen.append(div);
//   }

//   renderProjectDisplay(data) {
//     this.projectSections.innerHTML = "";

//     data.forEach((project) => {
//       const projectDisplaySection = document.createElement("div");
//       projectDisplaySection.classList.add("project-section--ui");
//       projectDisplaySection.setAttribute("data-custom", "task--title");

//       const projectDisplayTitle = this.createElement("h3", null, project.title);
//       const projectDisplayTitleHolder = document.createElement("div");
//       projectDisplayTitleHolder.append(projectDisplayTitle, this.editButton());
//       projectDisplayTitleHolder.classList.add("project-sub-title");

//       const projectDisplayTaskHolder = document.createElement("div");
//       projectDisplayTaskHolder.classList.add("tasks-display--ui");

//       project.tasks.forEach((task) => {
//         const taskLabel = this.createTaskLabel(task);
//         projectDisplayTaskHolder.appendChild(taskLabel);
//       });
//       projectDisplaySection.append(
//         projectDisplayTitleHolder,
//         projectDisplayTaskHolder
//       );
//       this.projectSections.appendChild(projectDisplaySection);
//     });

//     this.rightContentScreen.appendChild(this.projectSections);
//   }

//   createElement(tag, className, textContent) {
//     const element = document.createElement(tag);
//     if (className) element.classList.add(className);
//     if (textContent) element.textContent = textContent;
//     return element;
//   }

//   createTaskLabel(task) {
//     const label = document.createElement("label");
//     const checkbox = this.createElement("input", "input--ui");
//     checkbox.type = "checkbox";
//     const labelText = this.createElement("p", null, task);

//     label.append(checkbox, labelText, this.editButton());
//     return label;
//   }

//   editButton() {
//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.id = "editBtn";

//     return editBtn;
//   }

//   renderForm(data) {
//     new FormDisplay(data, this.renderProjectDisplay.bind(this, data));
//   }

//   renderEditForm(data, data2) {
//     new EditForm(
//       this.projectInformation,
//       this.renderHeaderDisplays.bind(this, data),
//       data2
//     );
//   }
// }

class NavBar {
  constructor() {
    this.header = document.createElement("header");
    this.logo = this.createLogo();
    this.nav = this.createNav();

    this.header.appendChild(this.logo);
    this.header.appendChild(this.nav);
  }

  createLogo() {
    const logo = document.createElement("span");
    logo.textContent = "LOGO";
    return logo;
  }

  createNav() {
    const nav = document.createElement("nav");

    const button1 = document.createElement("button");
    button1.innerHTML = "<svg>...</svg>"; // Example SVG

    const button2 = document.createElement("button");
    button2.innerHTML = "<svg>...</svg>"; // Another example SVG

    nav.appendChild(button1);
    nav.appendChild(button2);

    return nav;
  }

  getElement() {
    return this.header;
  }
}

class NavBarRenderer {
  constructor(navBar) {
    this.navBar = navBar;
  }

  render(target = document.body) {
    target.appendChild(this.navBar.getElement());
  }
}

// ------------------------------ Left UI

class NewLeftUI {
  constructor(taskManager) {
    this.taskManager = taskManager;
  }

  displayLeftProjects() {
    // Display projects as tabs, using the taskManager to retrieve relevant data
    console.log("Render Data using the NewRightUI");
  }

  displayAddProjectButton() {
    // Display "Add Project" button
    console.log("Display Add Project Button");
  }

  renderTaskGroups() {
    const taskGroups = this.taskManager.organizeTasks();
    console.log("Rendering Task Groups:", taskGroups);
    // Render the task groups in the UI (e.g., "Today", "Complete")
  }
}

// ------------------------------ Right UI

class Renderer {
  render() {
    throw new Error("Render method must be implemented");
  }
}

class TaskRenderer extends Renderer {
  render() {
    console.log("Render Tasks");
  }
}

class ProjectRenderer extends Renderer {
  render() {
    this.renderProjectTitle();
    this.renderInformation();
  }

  renderProjectTitle() {
    console.log("Render Project Title");
  }

  renderInformation() {
    console.log("Render Project Information");
  }
}

// Buttons
class AddTaskButtonLogic {
  addTask() {
    console.log("Adding Task...");
  }
}

class AddTaskButtonRenderer {
  constructor(addTaskButtonLogic) {
    this.addTaskButtonLogic = addTaskButtonLogic;
  }

  render() {
    console.log("Render Add Task Button");
    this.addTaskButtonLogic.addTask();
  }
}

class TaskFilterLogic {
  filterTasks() {
    console.log("Filtering tasks...");
  }
}

class FilterButtonRenderer {
  constructor(taskFilter) {
    this.taskFilter = taskFilter;
  }

  render() {
    console.log("Render Filter Button");
    this.taskFilter.filterTasks();
  }
}

class NewRightUI {
  constructor(data, renderers) {
    this.data = data;
    this.renderers = renderers; // Now it accepts any list of renderers
  }

  render() {
    this.renderers.forEach((renderer) => renderer.render());
  }
}

const taskRenderer = new TaskRenderer();
const projectRenderer = new ProjectRenderer();
const addTaskButtonLogic = new AddTaskButtonLogic();
const addTaskButton = new AddTaskButtonRenderer(addTaskButtonLogic);
const taskFilterLogic = new TaskFilterLogic();
const filterButtonRenderer = new FilterButtonRenderer(taskFilterLogic);

const ui = new NewRightUI(null, [
  projectRenderer,
  taskRenderer,
  addTaskButton,
  filterButtonRenderer,
]);

ui.render();

// ////////////////////////////////

class Task {
  constructor(name, description, due, priority, completed) {
    this.name = name;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.completed = completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  editTask(taskId, updatedTask) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      Object.assign(task, updatedTask);
    }
  }

  organizeTasks() {
    // Logic to organize tasks into "Today", "Complete", etc.
    return {
      today: this.tasks.filter((task) => task.status === "Today"),
      complete: this.tasks.filter((task) => task.status === "Complete"),
    };
  }
}
