// extend here the RightUi class and implement the form
import { RightUI } from "./todo-ui";

class FormDisplay extends RightUI {
  constructor(data) {
    super(data);

    this.testPush();
    this.test();
  }

  testPush() {
    this.projectTasksArrayToRender.push("Testing");
  }

  test() {
    console.log(this.projectTasksArrayToRender);
  }
}

new FormDisplay();
