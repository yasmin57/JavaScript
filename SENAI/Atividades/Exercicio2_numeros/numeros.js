//Recuperando elementos html
const $minimo = document.getElementById("minimo");
const $maximo = document.getElementById("maximo");
const $pares = document.getElementById("pares");
const $fatorial = document.getElementById("fatorial");
const $primo = document.getElementById("primo");
const $fibo = document.getElementById("fibonacci");
const $resultado = document.getElementById("resultado");

const exibirResultado = (arr, el) => {
    el.value = arr.join("\n");
}

const ePar = (num) => num % 2 === 0;

const listarPares = () => {
    let cont = 0;
    let num = 1;
    let pares = [];
    
    while ( cont < $maximo.value){

        if (ePar(num) ){
            cont++;
            if(cont >= $minimo.value){
                pares.push(cont + " - " +num);
            }
        }
        
        num++;
    }

    exibirResultado(pares, $resultado);
}
const fatorial = (num) => {
    if(num == 1){
        return 1;
    } else{
        return num * fatorial (num - 1);
    }
}

const listarFatorial = () =>{
    let num = $minimo.value;
    arrFatorial = [];
    while ( num <= $maximo.value){
        arrFatorial.push (fatorial (num));
        num++;
    }
    exibirResultado(arrFatorial, $resultado);
}

const ePrimo = (num) =>{
    let cont = 2;
    let ref = true;

    //Verifica se num é igual a 1
    if(num == 1){
        return false
    }
    else{
        //Enquanto cont for menor que o num
        while(cont < num){

            //verifica se o num é divisivel pelo cont
            if(num % cont == 0){
                ref = false; 
            }
                
            cont++;
        }
    }  
 
    return ref;
}

const listarPrimos = () =>{

    let num = $minimo.value;
    primos = [];

    //Enquanto num for menor/igual ao max
    while (num <= $maximo.value){

        //Verifica se é primo
        if(ePrimo(num))
            primos.push(num); //add no array

        num++;
    }

    console.log(primos);
    exibirResultado(primos, $resultado);
}

const fibo = (num) =>{
    let cont = 0;
    let prox = 0;
    let ante = 0;
    let atual = 1;
    while(cont < num){
        prox = ante + atual;
        ante = atual;
        atual = prox;
        cont++;
    }
    return ante;
}

const listarFibo = () =>{
    let num = $minimo.value;
    arrFibo = [];
    while (num <= $maximo.value){
        arrFibo.push(fibo(num));
        num++;
    }
    exibirResultado(arrFibo, $resultado);
}

$pares.addEventListener("click", listarPares);
$fatorial.addEventListener("click", listarFatorial);
$primo.addEventListener("click", listarPrimos);
$fibo.addEventListener("click", listarFibo);
