const mainSection = document.querySelector("#main-page");

class LeftUI {
  constructor(dataTitle) {
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

  modalDisplay(dataTask) {
    const form = document.createElement("form");
    form.id = "formContainer;";
    form.className = "form";
    form.action = "";

    // Create title options
    const titleOptionsDiv = document.createElement("div");
    titleOptionsDiv.className = "titleOptions";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    const titleInput = document.createElement("input");
    titleInput.type = "text"; // Changed to "text" for title input
    titleInput.name = "title";
    titleInput.id = "title";
    titleInput.required = true;

    titleOptionsDiv.appendChild(titleLabel);
    titleOptionsDiv.appendChild(titleInput);
    form.appendChild(titleOptionsDiv);

    // Create tasks section
    const tasksDiv = document.createElement("div");
    tasksDiv.className = "tasks";

    const tasksLabel = document.createElement("label");
    tasksLabel.textContent = "Task";
    const tasksInput = document.createElement("input");
    tasksInput.type = "text"; // Changed to "text" for task input
    tasksInput.name = "task";
    tasksInput.id = "task";
    tasksInput.required = true;

    tasksDiv.appendChild(tasksLabel);
    tasksDiv.appendChild(tasksInput);
    form.appendChild(tasksDiv);

    // Create submit button
    const submitButton = document.createElement("input");
    submitButton.className = "formSubmit";
    submitButton.type = "submit";
    submitButton.value = "Submit";

    form.appendChild(submitButton);
    // Append the form to the container

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Here, you can make changes based on input values
      const title = titleInput.value;
      const task = tasksInput.value;
      console.log(`Title: ${title}, Task: ${task}`);

      // Close the window
      form.classList.add("hidden");
    });

    document.querySelector("#main-page").appendChild(form);
  }
}

class RightUI extends LeftUI {
  constructor(data) {
    super(data);
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
    this.tasksDisplay = document.createElement("div");

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

    this.projectTitle.textContent = "Sildes and Notes";
    this.projectSection.appendChild(this.projectTitle);

    // Checkbox need to use for loop and organize
    const addTaskButton = document.querySelector('[data-custom="addNewTask"]');
    addTaskButton.addEventListener("click", () => {
      // Play with this modal. when click user and submit changes
      this.modalDisplay();

      const checkbox = document.createElement("input");
      checkbox.classList.add("input--ui");
      checkbox.type = "checkbox";
      checkbox.name = "dynamicCheckbox";
      checkbox.value = "yes";
      this.rightContentScreen.appendChild(checkbox);

      const label = document.createElement("label");
      const labelText = document.createElement("p");
      labelText.textContent = "Option 1"; // CHANGE TO dataTask

      label.appendChild(checkbox);
      label.appendChild(labelText);
      this.tasksDisplay.appendChild(label);
      this.projectSection.appendChild(this.tasksDisplay);
    });

    this.rightContentScreen.appendChild(this.projectSection);
  }
}

new RightUI();
