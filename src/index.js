import "./styles/styles.css";
import "./styles/left-screen.css";
import "./styles/right-screen.css";
import "./styles/form-screen.css";

import { RightUI } from "./todo-ui";
import { displayText } from "./logic";

// new RightUI();

const mainData = [
  {
    project: {
      date: "Today",
      title: "Default",
      description:
        "The description is here, try to find a way for users to edit this and make a button besides the title to edit.",
    },
    data: [
      {
        title: "Your Tasks",
        tasks: ["Make 3 slides for SEO"],
      },
    ],
  },
  {
    project: {
      date: "Today",
      title: "Stuff to Do",
      description:
        "The description is here, try to find a way for users to edit this and make a button besides the title to edit.",
    },
    data: [
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
    ],
  },
  {
    project: {
      date: "Today",
      title: "Learn Liquid Basics",
      description:
        "The description is here, try to find a way for users to edit this and make a button besides the title to edit.",
    },
    data: [
      {
        title: "Learn Fundamentals",
        tasks: ["Make 3 slides"],
      },
      {
        title: "Learn Syntax",
        tasks: ["Learn the Shopify UI", "Learn the Schema"],
      },
    ],
  },
];

console.log(displayText);

// console.log(mainData[0].data);

// put a parameter on the right side UI so the data will display accodingly. Make sure that the when project is seleted, the title is also projected
