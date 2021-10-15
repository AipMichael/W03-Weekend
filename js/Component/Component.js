class Component {
  element;
  parentElement;

  constructor(parentElement, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.parentElement = document.querySelector(parentElement);
    this.parentElement.append(this.element);
  }
}

export default Component;
