import Component from "../Component/Component.js";
import PokeCard from "../PokeCard/PokeCard.js";
import Service from "../Services/Services.js";

class Page extends Component {
  pokePage;

  constructor(pokeArray, url) {
    super(".main", ".main-page", "div");
    this.url = url;

    this.generateHtml();

    this.pokeArray = pokeArray;

    const newList = new Component(".card-section", "pokemon-list", "ul");

    (async () => {
      const pokeService = new Service(url);
      const showPokemon = await pokeService.getPokeInfo(this.url);

      this.pokePage = showPokemon.results;

      this.pokePage.map((pokemon) => new PokeCard(pokemon.url));
    })();
  }

  generateHtml() {
    const htmlText = `    <main class="main-pokeside">
      <header>
        <nav class="main-bar">
          <div class="main-bar__logo">
            <img
              class="main-bar__picture"
              src="./pokemon-logo.svg"
              alt="Poke logo"
            />
          </div>
          <h1 class="main-bar__title">Hello_adventurer</h1>
          <label for="main-bar__-input">poke-search</label>
          <input type="text" id="main-bar__poke-input" />
          <button class="main-bar__button">Catch 'em!</button>
        </nav>
      </header>

      <section class="card-section">

      </section>
    </main>
    <footer class="poke-footer">It was me.</footer>`;
    this.element.innerHTML = htmlText;
  }
}

export default Page;
