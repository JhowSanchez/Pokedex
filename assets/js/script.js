
function converterPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map( (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonHTML(pokemon){

    return ` 
        <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
                ${converterPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
        </div>
    </li>`
}
const  pokemonLi = document.getElementById('pokemonList')

//=> e a mesma coisa que uma function porem com sintaxe reduzida
pokeApi.getPokemons().then( (pokemonList = []) => {
     /*const listItem = []

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            listItem.push(convertPokemonHTML(pokemon))
        }*/
    /*                               
    const novaLista = pokemonList.map( (pokemon) => convertPokemonHTML(pokemon))

    const newHTML = novaLista.join("")
    pokemonLi.innerHTML += newHTML
    TUDO ISSO VIROU ISSO
    */
    pokemonLi.innerHTML = pokemonList.map(convertPokemonHTML).join('')
   
})

