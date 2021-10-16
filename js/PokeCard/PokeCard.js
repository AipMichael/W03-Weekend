import Component from "../Component/Component";
import List from "../List/List";

class PokeCard extends Component {
  element;
  parentElement;

  constructor() {
    super(".pokemon-list", "pokemon", "li");
  }
}

export default PokeCard;
