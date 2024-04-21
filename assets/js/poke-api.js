

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url).then( (response) => response.json())
}

//offset = 0 e limit = 10 significa se nada for passado os valores 0 e 10 sao por default
pokeApi.getPokemons = (offset = 0,limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; 
    return fetch(url)
    .then( (response) => response.json() )
    .then( (jsonBody) => jsonBody.results )
    .then( (pokemonDetalhes) => pokemonDetalhes.map(pokeApi.getPokemonDetail))
    .then( (detailRequests) => Promise.all(detailRequests))
    .then( (pokemonsDetails) => pokemonsDetails)
}