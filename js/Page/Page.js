import Component from "../Component/Component.js";
import PokeCard from "../PokeCard/PokeCard.js";
import Service from "../Services/Services.js";

class Page extends Component {
  pokePage;
  

  constructor() {
    super(".main", ".main-page", "div");
    this.offset = 0;
    this.url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${this.offset}`;
    this.page= 0;
    console.log(this.page); 
  
    this.getOffset();
    console.log(this.url);
    this.generateHtml();

    const newList = new Component(".card-section", "pokemon-list", "ul");

    (async () => {
      const pokeService = new Service(this.url);
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
// no hemos visto esto:
    getOffset = () => {
    const offset = this.page * 12;
    this.offset = offset;
    this.url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${this.offset}`
    }

      previousPage = () => {
        if (this.page > 0) {
        this.page--;
        this.getOffset();
        this.generateHTML();
    }
  };

    nextPage = () => {
    this.page++;
    this.getPageURL();
    this.generateHTML();
  };

  //aqui acaba lo que no he visto
}

export default Page;
