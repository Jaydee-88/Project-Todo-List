import "./styles/styles.css";
import "./styles/left-screen.css";
import "./styles/right-screen.css";
import "./styles/form-screen.css";

import { RightUI } from "./todo-ui";
import { displayText, Task } from "./logic";
import { CreateForm, AddTask, AddProject } from "./form-app";

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

const btnTest = document.querySelector("#btn-test");
const dataFromTaskTest = mainData;
const form = new AddTask(btnTest, dataFromTaskTest);

const btnProject = document.querySelector("#btn-test-project");
const projectForm = new AddProject(btnProject, mainData);

console.log(mainData);
console.log(dataFromTaskTest);

// Test-------------------
document.querySelector("#btn-checker").addEventListener("click", () => {
  // console.log(mainData[0].tasks);
  console.log(mainData);
});

// put a parameter on the right side UI so the data will display accodingly. Make sure that the when project is seleted, the title is also projected
