class Services {
  url;
  constructor(url) {
    /*  this.url = url; */
  }

  async getPokeInfo(url) {
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
  }
}

/* 
  async createSerie(serie) {
    const response = await fetch(${this.urlAPI}, {
      method: "POST",
      body: JSON.stringify(serie),
      header: {
        "Content-Type": "application/json",
      },
    });
    const newSerie = await response.json();
    return newSerie;
  }

  async updateSerie(id, serie) {
    fetch(${this.urlAPI}${id}, {
      method: "PUT",
      body: JSON.stringify(serie),
      header: {
        "Content-Type": "application/json",
      },
    });
  }

  async deleteSerie(id) {
    const response = await fetch(${this.urlAPI}${id}, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("Can't delete it");
  } */

export default Services;
