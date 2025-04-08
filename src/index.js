import "./styles/styles.css";
import "./styles/left-screen.css";
import "./styles/right-screen.css";
import "./styles/form-screen.css";

import { RightUI } from "./todo-ui";
import { displayText, Task, AddTask } from "./logic";

// new RightUI();

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
];

const testTask = new Task("test", "test", "test", "test", "test").data;
new AddTask(
  document.querySelector("#btn-test"),
  testTask,
  mainData[0].tasks
).pushData();

function addTaskToData() {}

document.querySelector("#btn-checker").addEventListener("click", () => {
  console.log(mainData[0].tasks);
});

// put a parameter on the right side UI so the data will display accodingly. Make sure that the when project is seleted, the title is also projected
