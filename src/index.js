import "./styles/styles.css";
import "./styles/left-screen.css";
import "./styles/right-screen.css";
import "./styles/form-screen.css";

import { RightUI } from "./todo-ui";
import { displayText, Task } from "./logic";
import { AddTask, AddProject } from "./form-app";

// To be moved as a database file
const mainData = [
  {
    id: 1,
    projectName: "Default Project",
    information:
      "Always keep your to-do list in check, even the smallest task, organized with intention, can lead to big achievements.",
    tasks: [
      {
        title: "Test the application",
        date: "2025-02-28",
        status: false,
        description: "Test application and check if it is working.",
        priority: "High",
        id: "task-1",
      },
      {
        title: "Add a README file",
        date: "2025-03-01",
        status: false,
        description: "Create a README file with the project description.",
        priority: "Medium",
        id: "task-2",
      },
      {
        title: "Add a LICENSE file",
        date: "2025-03-02",
        status: false,
        description: "Create a LICENSE file with the project license.",
        priority: "Low",
        id: "task-3",
      },
    ],
  },
  {
    id: 2,
    projectName: "Test Project",
    information: "Play In moderate times. Don't forget your priorities ",
    tasks: [
      {
        title: "Do Dailies in Wuthering Waves",
        date: "2025-02-28",
        status: true,
        description: "Test application and check if it is working.",
        priority: "High",
        id: "task-1",
      },
      {
        title: "Do Dailies in Genshin Impact",
        date: "2025-03-01",
        status: true,
        description: "Create a README file with the project description.",
        priority: "Low",
        id: "task-2",
      },
      {
        title: "Do Dailies in Honkai Star Rail",
        date: "2025-03-02",
        status: true,
        description: "Create a LICENSE file with the project license.",
        priority: "Low",
        id: "task-3",
      },
    ],
  },
];

let switchTarget = 0;

const btnTest = document.querySelector("#btn-test");
const dataFromTaskTest = mainData;
const form = new AddTask(btnTest, dataFromTaskTest, switchTarget);

const btnProject = document.querySelector("#btn-test-project");
const projectForm = new AddProject(btnProject, mainData);

// Test-------------------
document.querySelector("#btn-checker").style.marginBottom = "50px";
document.querySelector("#btn-checker").addEventListener("click", () => {
  console.log(mainData);
});

// Project Display Test
const rightScreen = document.querySelector("#display--screen");
mainData.forEach((project) => {
  const btnsDisplay = document.createElement("div");
  btnsDisplay.classList.add("btns-project-test");

  btnsDisplay.addEventListener("click", (el) => {
    switchTarget = project.id - 1;
    console.log(switchTarget);
    console.log(project);
  });

  rightScreen.appendChild(btnsDisplay);
});

// Need to resest form to accept the changes of the forEach
// need to know why form is duplicating
