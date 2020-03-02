//Resgate de elementos html
let $exibe_num = document.getElementById("txt_num");
let $exibe_par = document.getElementById("txt_par");
let $exibe_quadrado = document.getElementById("txt_qua");
let $exibe_unicos = document.getElementById("txt_uni");

//Variaveis
var numeros = [];
var pares = [];
var quadrados = [];
var unicos = [];

/*  1 - Crie uma função que crie um array 
    com 30 números aleatórios entre 1 e 20         */
 
const numerosAleatorios = (max, min, controle) =>{
    let listNumeros = new Array();

    for(i = 0; i < controle; i++) {	
		listNumeros.push(Math.floor((Math.random() * max) + min)); 	
    }

    return listNumeros;
}
const arrMain = () =>{
    let controle = 30;

    numeros = numerosAleatorios(20, 1, controle);
    pares = listaPares(numeros, controle);
    quadrados = listaQuadrados(numeros, controle);
    unicos = listaUnicos(numeros, controle);
     
} 

/*  2 - Crie uma função que receba um array 
    e retorne um novo array com os números pares */

const listaPares = (arr, controle) =>{
    let listPares = [];

    //Laço que repete conforme a quantidade do array (30)
    for(i = 0; i < controle; i++)
    {
        //Verifica se o valor do indice i é par
        if(arr[i] % 2 == 0){
            listPares.push(+arr[i]);
        }
    }

    return listPares;
}


/*  3 - Crie uma função que receba um array e retorne 
        um novo array com o quadrado de cada elemento  */

const listaQuadrados = (arr, controle) =>{
    let listQuadrados = [];

    //Repete enquanto i for menor que controle/30
    for(i = 0; i < controle; i++){
        listQuadrados.push(Math.pow(numeros[i], 2));
    }

    return listQuadrados;
}


/*  4 - Crie uma função que receba um array e 
    retorne um novo array com os elementos únicos */

const listaUnicos = (arr, controle) =>{

    let listUnicos = [];
    let copia = numeros;
    let reference = true;

    for(i = 0; i < controle; i++){
        for(j = 0; j < controle; j++){
            if(i == j){
                reference = true;
            }
            else if(numeros[i] == copia[j]){
                reference = false;
                break;
            }
        }
        if(reference == true){
            listUnicos.push(numeros[i]);
        }
    }

    return listUnicos;
}

arrMain();
// console.log(unicos);

$exibe_num.value = numeros.join("\n");
$exibe_par.value = pares.join("\n");;
$exibe_quadrado.value = quadrados.join("\n");
$exibe_unicos.value = unicos.join("\n");


