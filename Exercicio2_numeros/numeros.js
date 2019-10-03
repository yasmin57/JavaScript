const $minimo = document.getElementById("minimo");
const $maximo = document.getElementById("maximo");
const $pares = document.getElementById("pares");
const $fatorial = document.getElementById("fatorial");
const $primo = document.getElementById("primo");
const $fibo = document.getElementById("fibonacci");
const $resultado = document.getElementById("resultado");

const ePar = (num) => num % 2 === 0;

const exibirResultado = (arr, el) => {
    el.value = arr.join("\n");
}

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
    console.log(pares);
    exibirResultado(pares, $resultado);
}
const fatorial = (num) => {
    // let fat = 1; 
    // while (num >=1){
    //     fat = fat * num;
    //     num--;
    // }
    // return fat;
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

const primo = (num) =>{
    let contador = 2;
    let referencia = true;
    if(num==1){
        referencia = false;
    }
    else{
        while(contador < num){
            if(num%contador==0)
            {
                referencia = false;
            }
            contador++;
        }
    }   
    if(referencia == true){
         return num;
    }
}

const listarPrimos = () =>{
    let num = $minimo.value;
    arrPrimo = [];
    while (num <= $maximo.value){
        arrPrimo.push(primo(num));
        num++;
    }
    exibirResultado(arrPrimo, $resultado);
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
