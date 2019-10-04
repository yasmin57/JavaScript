let $exibe_num = document.getElementById("txt_num");
let $exibe_par = document.getElementById("txt_par");
let $exibe_quadrado = document.getElementById("txt_qua");
let $exibe_unicos = document.getElementById("txt_uni");

//Exercicio 1 - Crie uma função que crie um array com 30 números aleatórios entre 1 e 20
let arrNumero = [];

const numerosAleatorios = (max, min, controle) =>{
    for(i = 0; i < controle; i++) {	
		arrNumero.push(Math.floor((Math.random() * max) + min)); 	
    }
    return arrNumero;
}
const arrMain = () =>{
    let controle = 30;
    numerosAleatorios(20, 1, controle);
    arrPares(arrNumero, controle);
    arrQuadrado(arrNumero, controle);
    arrUnicos(arrNumero, controle);
} 

//Exercicio 2 - Crie uma função que receba um array e retorne um novo array com os números pares
let pares = [];

const arrPares = (arr, controle) =>{
    for(i = 0; i < controle; i++)
    {
        if(arrNumero[i]%2==0){
            pares.push(+arrNumero[i]);
        }
    }
}


//Exercicio 3 - Crie uma função que receba um array e retorne um novo array com o quadrado de cada elemento
let quadrado = [];
const arrQuadrado = (arr, controle) =>{
    for(i = 0; i < controle; i++){
       quadrado[i] =arrNumero[i] * arrNumero[i];
    }
}


//Exercicio 4 - Crie uma função que receba um array e retorne um novo array com os elementos únicos
let unicos = [];
let arrCopia = arrNumero;
let reference = true;

const arrUnicos = (arr, controle) =>{

    for(i = 0; i < controle; i++){
        for(j = 0; j < controle; j++){
            if(i == j){
                reference = true;
            }
            else if(arrNumero[i] == arrCopia[j]){
                reference = false;
                break;
            }
        }
        if(reference == true){
            unicos.push(arrNumero[i]);
        }
    }
}

arrMain();
console.log(arrNumero);
console.log(pares);
console.log(quadrado);
console.log(unicos);

$exibe_num.value = arrNumero.join("\n");
$exibe_par.value = pares.join("\n");;
$exibe_quadrado.value = quadrado.join("\n");
$exibe_unicos.value = unicos.join("\n");


