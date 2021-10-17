import Component from "../Component/Component.js";
import PokeCard from "../PokeCard/PokeCard.js";
import Service from "../Services/Services.js";
import Button from "../Button/Button.js";
import PokeFaveCard from "../pokefavorite.js/pokeFaveCard.js";

class Page extends Component {
  pokePage;
  offset = 0;
  url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${this.offset}`;
  myApi = false;
  

  constructor(url) {
        super(".main", ".main-page", "div");

    if (typeof url !== "undefined") {
      this.url = url;
      this.myApi=true;
    } 
    console.log(this.url);
    this.page= 0;

  
    this.getOffset();
   
    this.generateHtml();
/*     const pageButtonPrevious = new Button(".page-buttons","page-buttons__previous", "<", this.previousPage) */
    const pageButtonNext = new Button(".page-buttons","page-buttons__next", "catch some more! >>", this.nextPage)
    const newList = new Component(".card-section", "pokemon-list", "ul");

    const pokePaint = (async () => {
      const pokeService = new Service(this.url);
      const showPokemon = await pokeService.getPokeInfo(this.url);
      console.log(showPokemon);

      if(!this.myApi){
      this.pokePage = showPokemon.results;
      this.pokePage.map((pokemon) => new PokeCard(pokemon.url));
      } else {
        this.pokePage = showPokemon;
      this.pokePage.map((pokemon) => new PokeFaveCard(pokemon));
      }
      console.log(this.pokePage);
      
    });
    this.pokePaint=pokePaint;
    this.pokePaint();
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
      <section class="page-buttons">
      
      </section>
    </main>
    <footer class="poke-footer">It was me.</footer>`;
    this.element.innerHTML = htmlText;
  }

    getOffset = () => {
      if (this.url.includes("https://pokeapi.co/api")){
    const offset = this.page * 12;
    this.offset = offset;
    this.url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${this.offset}`
    }
  }

    nextPage = () => {
    this.page++;
    this.getOffset();
    this.pokePaint();  
  };

// necesita refactorizar para poder aplicarse:
      previousPage = () => {
        if (this.page > 0) {
        this.page--;
        
        this.getOffset();
        this.pokePaint();
   
    }
  };


}

export default Page;
