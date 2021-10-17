import Component from "../Component/Component.js";
import Services from "../Services/Services.js";

class PokeCard extends Component {
  name;
  imageUrl;
  pokeId;
  url;

  constructor(url) {
    super(".pokemon-list", "pokemon", "li");
    this.url = url;

    

    (async () => {
      let pokeService = new Services(this.url);

      let showPokemon = await pokeService.getPokeInfo(this.url);

      this.name = showPokemon.name;

      this.pokeId = showPokemon.id;
      this.imageUrl = showPokemon.sprites.other.dream_world.front_default;

      this.generateHtml();

    })();

    
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
                <i class="star">fav_</i>
                <h2 class="card__image pokemon__card--title">-${this.name}-</h2>
                <div class="pokemon__card--info">
                  <ul class="pokemon__card--list-unstyled">
                    <li class="pokemon__card--list-item">Number:_${this.pokeId}</li>
                    <li class="pokemon__card--list-item">Type:</li>
                  </ul>
                </div>
              </div>
              
            </div>`;

    this.element.innerHTML = myHtml;

      this.element.addEventListener("click", () => {
      const pokePokemon={
        name: this.name,
        image: this.imageUrl,
        pokeId: this.pokeId,
      }
      console.log(pokePokemon);
      const pokePost = new Services ("https://poke-aip.herokuapp.com/pokemon");
      
      const pokeFavorite= pokePost.postPokeInfo(pokePokemon);
    })
  }
/*   catchPokemon() {
    const myPokeFavorites =
      "https://poke-aip.herokuapp.com/pokemon/";
    const pokeFavorite = new Services(myPokeFavorites);
    console.log(pokeFavorite);
    pokeFavorite.postPokeInfo({ name: this.name, url: this.url}); //revisar
    console.log(pokeFavorite);
  } */
}

export default PokeCard;
