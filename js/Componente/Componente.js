class Component {
  element;
  parentElement;

  constructor(parentElement, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.parentElement = parentElement;
    this.parentElement.append(this.element);
  }
}

export default Component;


this.parentElement = document.querySelector("body");