const mainSection = document.querySelector("#main-page");

class LeftUI {
  constructor() {
    this.leftNavScreen = document.querySelector("#nav--screen");
    this.rightContentScreen = document.querySelector("#display--screen");
    this.contents = ["Logo", "Projects"];

    this.logoAndHeaders();
  }

  logoAndHeaders() {
    const headingLogo = document.createElement("h1");
    const headingProjects = document.createElement("h1");

    // CHANGE TO IMAGE THE LOGO
    // PUTCLASS
    headingLogo.textContent = "LOGO";
    headingProjects.textContent = "Projects";

    this.leftNavScreen.appendChild(headingLogo);
    this.leftNavScreen.appendChild(headingProjects);
  }

  leftUIcontents() {
    return this.contents.forEach((el) => {
      const lists = document.createElement("h5");
      // PUTCLASS
      heading.textContent = el;

      this.leftNavScreen.appendChild(lists);
    });
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
class RightUI {}

new LeftUI();
