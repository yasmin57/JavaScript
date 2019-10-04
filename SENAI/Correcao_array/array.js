
//**********  A3 - EXERCÍCIO 01  **********/
const $conteiner = document.getElementById("conteiner");

// FUNÇÃO QUE GERA UM NÚMERO
const numeroAleatoriio = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) ) +min;
}

//FUNÇÃO QUE GERA 30 NÚMEROS EM UM ARRAY
const gerarNumeros = () => {

    let numeros = [];
    for(i = 0; i <30; i++)
    {
        numeros.push( numeroAleatoriio(1,20));
    }
    return numeros;

}

const exibirArray = (arr, header, title) =>{
    html = `<div class="card bg-dark text-white">
                <div class="card-header"> ${header} </div>
                <div class="card-body bg-secondary" >
                    <h5 class="card-title"> ${title} </h5>
                    <p class="card-text">${arr.join(" - ")}</p> 
                </div>
            </div>`

    return html;
}

// VARIÁVEL QUE RECEBE O ARRAY COM 30 NÚMEROS
const numeros = gerarNumeros();

//**********  A3 - EXERCÍCIO 02  **********/
const ePar = (num) => num % 2 == 0;  // função que retorna par
const filtrarPares = (arr) => arr.filter( ePar); // função que recebe um array e manda seus valores para função ePar ~filtrando somente os que consta na codição do ePar 
const numerosPares = filtrarPares(numeros); // chama a função que filtra os pares e guarda em uma variavél//novo array

//**********  A3 - EXERCÍCIO 03  **********/
const quadrado = (num) => num * num;
const arrayQuadrado = (arr) => arr.map(quadrado);
const numerosQuadrados = arrayQuadrado(numeros);

//**********  A3 - EXERCÍCIO 04  **********/
const eUnico = (el, i, arr) => {
    let cont = 0;
    for(i=0; i<arr.length; i++){
        if (el == arr[i] ){
            cont++;
        }
    }
    return cont == 1;
}
const arrayUnicos = (arr) => arr.filter(eUnico);
const numerosUnicos = arrayUnicos(numeros);


$conteiner.innerHTML = exibirArray(numeros, "Exercício 01", "Números Aleatórios");
$conteiner.innerHTML += exibirArray(numerosPares, "Exercício 02", "Números Pares");
$conteiner.innerHTML += exibirArray(numerosQuadrados, "Exercício 03", "Números ao Quadrado");
$conteiner.innerHTML += exibirArray(numerosUnicos, "Exercício 04", "Números Únicos");
// const nomes = ["Ross", "Phoebe", "Rachel", "Chandler", "Mônica", "Joey"]
// $conteiner.innerHTML += exibirArray(nomes, "Friends", "Personagens Favoritos");
