// url da api
const $url = "https://pokeapi.co/api/v2/pokemon/";

//Pega os elementos em html e guarda em constantes
const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $sectionPokemon = document.getElementById("pokemon");

//Variaveis
var name, 
    jsonPokemon, 
    html; 

//Função que faz a requisição da API e guarda o retorno na variavel pokemon
const requisicaoAPI = (url, name) =>{
    fetch(url + name)
  .then(resposta => resposta.json())
  .then(dados => {jsonPokemon = dados;})
}

//Função que cria o html
const criaHtml = (seletorImage, seletorContainer, seletorItens) =>{
    html = `
    <div ${seletorImage}>
        <img src="${jsonPokemon.sprites.front_shiny}" alt="Imagem do ${jsonPokemon.name}">
    </div>
    <table ${seletorContainer}>
        <tr>
            <td ${seletorItens}><h1> ${jsonPokemon.name}</h1></td>
        </tr>
        <tr>
            <td ${seletorItens}>Nº ${jsonPokemon.id}</td>
        </tr>
        <tr>
            <td ${seletorItens}>Type: ${jsonPokemon.types.map(item => item.type.name).toString()}</td>
        </tr>
        <tr>
            <td ${seletorItens}>Abilities: ${jsonPokemon.abilities.map(item => item.ability.name).toString()}</td>
        </tr>
        <tr>
            <td ${seletorItens}>Skills: ${jsonPokemon.moves.map(item => ' ' + item.move.name).toString()}</td>
        </tr>
        <tr>
            <td ${seletorItens}>Weight: ${jsonPokemon.weight  / 10}kg</td>
        </tr>
        <tr>
            <td ${seletorItens}>Height: ${jsonPokemon.height  / 10}m</td>
        </tr>
    </table>`;
    return html;
}

const mostrarDados = (name) => {
    // chamada da função que requisita a API
    requisicaoAPI($url, name);

    // chamada da função que cria o html
    $sectionPokemon.innerHTML = criaHtml('class = "pokemon_image"','class = "pokemon_dados"','class = "item fonte"');
}



// Evento no clique do botão
$button.addEventListener("click", event =>{
    event.preventDefault();
    name = $input.value.toLowerCase();
    mostrarDados(name);
})


