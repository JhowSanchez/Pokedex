const  pokemonLi = document.getElementById('pokemonList')
const loadButton = document.getElementById('button')
const max = 151
const limit = 10
let offset = 0;

function convertPokemonHTML(pokemon){

    return `<li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}"> ${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.img}" alt="${pokemon.name}">
    </div>
</li>`
}

function loadPokemonItems(offset ,limit ){
    pokeApi.getPokemons(offset ,limit ).then( (pokemonList = []) => {
        const newHTML = pokemonList.map(convertPokemonHTML ).join('')
        pokemonLi.innerHTML += newHTML
    })
}

loadPokemonItems(offset ,limit)

loadButton.addEventListener('click',() => {
    offset += limit
    const qtdMax = offset + limit
    
    if(qtdMax >= max)
    {
        const newLimit = max - offset
        loadPokemonItems(offset ,newLimit)

        loadButton.parentElement.removeChild(loadButton)
    }
    else
        loadPokemonItems(offset ,limit)
})

//=> e a mesma coisa que uma function porem com sintaxe reduzida
//pokeApi.getPokemons().then( (pokemonList = []) => {
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
  //  pokemonLi.innerHTML = pokemonList.map(convertPokemonHTML).join('')
   
//})

