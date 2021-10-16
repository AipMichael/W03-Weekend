import Component from "../Component/Component.js";

class Button extends Component {
  constructor(parentElement, className, text, action) {
    super(parentElement, className, "button");
    this.text = text;
    this.action= action;

    this.clicked();
    
  }

    clicked(){
      this.element.addEventListener("click", this.action);
    }
}


export default Button;