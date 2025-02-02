const mainSection = document.querySelector("#main-page");

class LeftUI {
  constructor() {
    this.leftNavScreen = document.querySelector("#nav--screen");
    this.headingLogo = document.createElement("h1");
    this.headingProjects = document.createElement("h1");
    this.headingTeams = document.createElement("h1");

    this.projectHolder = document.createElement("div");
    this.teamHolder = document.createElement("div");

    this.arrayTodoTest = [
      "Finish PROJECT!",
      "Find Job and Track",
      "Learn Liquid Basics",
    ];

    this.logoAndHeaders();
    this.leftUIcontents(this.arrayTodoTest);
  }

  logoAndHeaders() {
    const newTaskButton = document.createElement("button");
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

  // Fix the issue inside and outside the BUTTON LIST it should be clickable.
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

  doStuff() {
    const text = document.createElement("h1");
    const text2 = document.createElement("h1");
    const div = document.createElement("div");

    text.textContent = "test";
    text2.textContent = "test";
    this.leftNavScreen.appendChild(text);
    this.leftNavScreen.appendChild(text2);
  }

  get test() {
    console.log("hello");
    return;
  }
}
class RightUI {
  constructor() {
    this.rightContentScreen = document.querySelector("#display--screen");
    this.projectTasksTest = [
      "Preperation for Powerpoint",
      "Study SEO in-depth",
      "Workout Routine",
      "Study Plan",
    ];
    // make a function when the new task is press put it in here
    this.projectTasksArrayToRender = [];

    this.dateDisplay = document.createElement("h1");
    this.titleDisplay = document.createElement("h1");
    this.descriptionDisplay = document.createElement("p");

    this.renderHeaderDisplay();
    this.renderProjectDisplay();
  }

  renderHeaderDisplay() {
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

  renderProjectDisplay() {
    this.projectSection = document.createElement("div");
    this.projectTitle = document.createElement("h3");
    this.projectSection.classList.add("project-section--ui");
    this.projectTitle.classList.add("project-title--ui");

    this.projectTitle.textContent = "Sildes and Notes";
    this.projectSection.appendChild(this.projectTitle);

    // Checkbox need to use for loop and organize
    const checkbox = document.createElement("input");
    checkbox.classList.add("input--ui");
    checkbox.type = "checkbox";
    checkbox.name = "dynamicCheckbox";
    checkbox.value = "yes";
    this.rightContentScreen.appendChild(checkbox);

    const label = document.createElement("label");
    const labelText = document.createElement("p");
    labelText.textContent = "Option 1";

    label.appendChild(checkbox);
    label.appendChild(labelText);
    this.projectSection.appendChild(label);
    this.rightContentScreen.appendChild(this.projectSection);
  }
}

new LeftUI();
new RightUI();
