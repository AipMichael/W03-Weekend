import Component from "../Component/Component";

class List extends Component {
  element;
  parentElement;

  constructor() {
    super(".pokemon-list", "pokemon-list list-unstyled", "ul");
  }
}

export default List;
