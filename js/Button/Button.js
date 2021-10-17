import Component from "../Component/Component.js";

class Button extends Component {
  constructor(parentElement, className, text, action) {
    super(parentElement, className, "button");
    this.parentElement= document.querySelector(parentElement);
    this.text = text;
    this.action= action;

    this.element.textContent = this.text;

    this.clicked();
    
  }

    clicked(){
      this.element.addEventListener("click", this.action);
    }
}


export default Button;