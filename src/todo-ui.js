const mainSection = document.querySelector("#main-page");

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

    // CHANGE TO IMAGE THE LOGO
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

  // Fix the issue inside and outside the BUTTON LIST it should be clickable. they should be merge. something related to bubbling.
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

export class RightUI extends LeftUI {
  constructor(data) {
    super(data);
    this.rightContentScreen = document.querySelector("#display--screen");

    this.projectDisplaySubTitle = [
      {
        title: "Preperation for Powerpoint",
        tasks: ["Make 3 slides for SEO"],
      },
      {
        title: "Study SEO in-depth",
        tasks: ["Learn the fundamentals"],
      },
      {
        title: "Workout Routine",
        tasks: ["Make a 7 day weekplan with 2 rest days"],
      },
      {
        title: "Study Plan",
        tasks: ["Learn IELTS", "Learn Python"],
      },
    ];

    this.dateDisplay = document.createElement("h1");
    this.titleDisplay = document.createElement("h1");
    this.descriptionDisplay = document.createElement("p");
    this.tasksDisplay = document.createElement("div");

    this.projectSections = document.createElement("div");
    this.projectSections.setAttribute("data-custom", "project-task");
    this.projectSections.classList.add("project-task");

    this.renderHeaderDisplay();
    this.renderProjectDisplay();
  }

  renderHeaderDisplay(dataTitle, dataTime, dataDescription) {
    this.dateDisplay.textContent = "Today";
    this.titleDisplay.textContent = "Title";
    this.descriptionDisplay.textContent =
      "The description is here try to find a way for users to edit this and make a button besides the title to edit.";
    this.dateDisplay.classList.add("date--ui");
    this.titleDisplay.classList.add("title--ui");
    this.descriptionDisplay.classList.add("description--ui");

    this.rightContentScreen.appendChild(this.dateDisplay);
    this.rightContentScreen.appendChild(this.titleDisplay);
    this.rightContentScreen.appendChild(this.descriptionDisplay);
  }

  renderProjectDisplay(dataSubTitle, dataTask) {
    this.projectSection = document.createElement("div");
    this.projectTitle = document.createElement("h3");
    this.projectSection.classList.add("project-section--ui");
    this.projectTitle.classList.add("project-title--ui");
    this.tasksDisplay.classList.add("tasks-display--ui");

    // Display Sub-Title and tasks
    this.projectDisplaySubTitle.forEach((el) => {
      const projectDisplaySection = document.createElement("div");
      const projectDisplayTitle = document.createElement("h3");
      const projectDisplayTaskHolder = document.createElement("div");
      const projectDisplayDueDate = document.createElement("p");

      projectDisplaySection.classList.add("project-section--ui");
      projectDisplayTaskHolder.classList.add("tasks-display--ui");

      projectDisplayTitle.textContent = el.title;
      el.tasks.forEach((tasks) => {
        const projectDisplayTasks = document.createElement("p");
        projectDisplayTasks.textContent = tasks;

        const checkbox = document.createElement("input");
        checkbox.classList.add("input--ui");
        checkbox.type = "checkbox";

        const label = document.createElement("label");
        const labelText = document.createElement("p");
        // // MARKER
        labelText.textContent = tasks; //
        label.appendChild(checkbox);
        label.appendChild(labelText);
        projectDisplayTaskHolder.appendChild(label);
      });

      projectDisplaySection.appendChild(projectDisplayTitle);
      projectDisplaySection.appendChild(projectDisplayTaskHolder);

      projectDisplaySection.setAttribute("data-custom", "task--title");

      this.projectSections.appendChild(projectDisplaySection);
      this.rightContentScreen.appendChild(this.projectSections);
    });
  }
}
