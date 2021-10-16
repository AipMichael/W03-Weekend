import Component from "../Component/Component.js";

class PokeCard extends Component {
  constructor({ name, url, id, type }) {
    super(".pokemon-list", "pokemon", "li");
    this.url = url;
    this.name = name;
    this.id = id;
    this.type = type;

    this.generateHtml();
  }

  generateHtml() {
    const myHtml = `<div class="card pokemon__card">
              <div class="card-image__container">
                <img
                  src="${this.url}"
                  alt="Poke-picture"
                  class="card-image pokemon__card--image"
                />
              </div>
              <div class="pokemon__card--body">
                <i class="star">icon_</i>
                <h2 class="card__image pokemon__card--title">-${this.name}-</h2>
                <div class="pokemon__card--info">
                  <ul class="pokemon__card--list-unstyled">
                    <li class="pokemon__card--list-item">Number:_${this.id}</li>
                    <li class="pokemon__card--list-item">Type:_${this.type}</li>
                  </ul>
                </div>
              </div>
              <i class="pokemon__emoji">estrellita</i>
            </div>`;

    this.element.innerHTML = myHtml;
  }
}

export default PokeCard;
