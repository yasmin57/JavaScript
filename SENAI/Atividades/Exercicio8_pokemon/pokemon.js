// url da api
const $url = "https://pokeapi.co/api/v2/pokemon/";

//Pega os elementos em html e guarda em constantes
const $input = document.getElementById("input");
const $button = document.getElementById("button");
const $sectionPokemon = document.getElementById("pokemon");
const $error = document.getElementById("error");

//Variaveis
var name, 
    dadosPokemon, 
    html; 

//Função que faz a requisição da API e guarda o retorno na variavel pokemon
const requisicaoAPI = (url, name) =>{
    fetch(url + name)
  .then(response => response.json())
  .then(data => {dadosPokemon = data;})
}

//Função que cria o html
const criaHtml = () =>{
    html = `
    <div class="pokemon_image">
        <img src="${dadosPokemon.sprites.front_shiny}" alt="Imagem do ${dadosPokemon.name}">
    </div>
    <table class="pokemon_dados">
        <tr>
            <td class="item fonte">Name: ${dadosPokemon.name}</td>
        </tr>
        <tr>
            <td class="item fonte">Nº ${dadosPokemon.id}</td>
        </tr>
        <tr>
            <td class="item fonte">Type: ${dadosPokemon.types.map(item => item.type.name).toString()}</td>
        </tr>
        <tr>
            <td class="item fonte">Abilities: ${dadosPokemon.abilities.map(item => item.ability.name).toString()}</td>
        </tr>
        <tr>
            <td class="item fonte">Skills: ${dadosPokemon.moves.map(item => ' ' + item.move.name).toString()}</td>
        </tr>
        <tr>
            <td class="item fonte">Weight: ${dadosPokemon.weight  / 10}kg</td>
        </tr>
        <tr>
            <td class="item fonte">Height: ${dadosPokemon.height  / 10}m</td>
        </tr>
    </table>`;
    return html;
}

const mostrarDados = (name) => {
    // chamada da função que requisita a API
    requisicaoAPI($url, name);

    // chamada da função que cria o html
    $sectionPokemon.innerHTML = criaHtml();
}



// Evento no clique do botão
$button.addEventListener("click", event =>{
    event.preventDefault();
    name = $input.value.toLowerCase();
    mostrarDados(name);
})


