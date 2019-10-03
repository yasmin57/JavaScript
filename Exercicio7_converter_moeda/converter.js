// 
const $botao = document.querySelector('#botao');
const $resultado = document.querySelector('#resultado');
const $tipo1 = document.querySelector('#tipo1');
const $valor1 = document.querySelector('#valor1');
const $tipo2 = document.querySelector('#tipo2');



const converterMoeda = () =>
{
    const moeda1 = $tipo1.value;
    const valor = $valor1.value;
    const moeda2 = $tipo2.value;

    console.log(moeda1, valor, moeda2);

    const url = `https://hgbrasil.com/status/finance`;

    json.then ( res => (res).then(dados => mostrarDados(dados)));         

    const mostrarDados = ( json )=>
    {
        console.log(json);
    }
}

$botao.addEventListener("click", () => converterMoeda());