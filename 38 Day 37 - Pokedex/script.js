const pokeContainer = document.querySelector("#poke-container");
const pokemonCount = 51;

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaedal",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
};

const fetchPokemons = async () => {
    for (let i = 1; i < pokemonCount; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${id}/`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    createPokemonCard(data);
};

const createPokemonCard = (data) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const name = data.pokemon.name[0].toUpperCase() + data.name.slice(1);
    const id = data.id.toString().padStart(3, "0");
    const type = data.types[0].type.name;
    const img = data.sprites.front_default;
    const color = colors[data.types[0].type.name];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
        <div class="img-container">
            <img
                src="${img}"
                alt=""
            />
        </div>
        
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <b>${type}</b></small>
        </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;
    pokeContainer.appendChild(pokemonEl);
};

fetchPokemons();
