import "./styles/styles.css";
import "./styles/left-screen.css";
import "./styles/right-screen.css";
import "./styles/form-screen.css";
import { RightUI } from "./todo-ui";

new RightUI();

const mainData = [
  {
    project: "Default",
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
    project: "Learn Liquid Basics",
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
