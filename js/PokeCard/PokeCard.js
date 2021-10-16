import Component from "../Component/Component";
import List from "../List/List";

class PokeCard extends Component {
  element;
  parentElement;

  constructor(imageUrl, name, id, type) {
    super(".pokemon-list", "pokemon", "li");
    this.imageUrl = imageUrl;
    this.name = name;
    this.id = id;
    this.type = type;

    this.generateHtml();
  }

  generateHtml() {
    const myHtml = `<div class="card pokemon__card">
              <div class="card-image__container">
                <img
                  src="${this.imageUrl}"
                  alt="Poke-picture"
                  class="card-image pokemon__card--image"
                />
              </div>
              <div class="pokemon__card--body">
                <i class="star">icon_</i>
                <h2 class="card__image pokemon__card--title">Pokemon-${this.name}_</h2>
                <div class="pokemon__card--info">
                  <ul class="pokemon__card--list-unstyled">
                    <li>Number:_${this.id}</li>
                    <li>Type:_${this.type}</li>
                  </ul>
                </div>
              </div>
              <i class="pokemon__emoji">estrellita</i>
            </div>`;
  }
}

export default PokeCard;
