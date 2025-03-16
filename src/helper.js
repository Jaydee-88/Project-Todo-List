export function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

export function createTaskLabel(task) {
  const label = document.createElement("label");
  const checkbox = this.createElement("input", "input--ui");
  checkbox.type = "checkbox";
  const labelText = this.createElement("p", null, task);

  label.append(checkbox, labelText, this.editButton());
  return label;
}

export function editButton() {
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.id = "editBtn";

  return editBtn;
}

// Test and make a dialogue
