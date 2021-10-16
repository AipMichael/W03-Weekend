import Page from "./Page/Page.js";
const  offset = 0; 
const url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;

const pokeArray = [
  {
    imageUrl:
      "https://toppng.com/uploads/preview/anime-pokemon-png-transparent-pokemon-pikachu-115628931001szanhj4sy.png",
    name: "Pika-cute",
    id: "45",
    type: "love",
  },
  {
    imageUrl:
      "https://toppng.com/uploads/preview/anime-pokemon-png-transparent-pokemon-pikachu-115628931001szanhj4sy.png",
    name: "Pika-c-u",
    id: "45",
    type: "meow",
  },
];

const pruebaPokemon = new Page(url);
