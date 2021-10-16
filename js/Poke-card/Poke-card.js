import Component from "../Component/Component";
import List from "../List/List";

class List extends Component {
  element;
  parentElement;

  constructor() {
    super(".card-section", "pokemon-list list-unstyled", "ul");
  }
}

export default List;
