const $img = document.getElementById("img");
const $amarelo = document.getElementById("amarelo");
const $verde = document.getElementById("verde");
const $vermelho = document.getElementById("vermelho");
const $automatico = document.getElementById("automatico");
const $parar = document.getElementById("parar");


const ligar = (cor) => $img.src = `./img/${cor}.png`;

let i = 0;
const automatico = () =>{
    if (i == 0){
        ligar("vermelho");
        i = 1;
    }   
    else if (i == 1){
        ligar("amarelo");
        i = 2;
    }
    else if(i == 2){
        ligar("verde");
        i = 3;
    }
    else if(i == 3){
        ligar("desligado");
        i = 0;
    }
}
let set;
const iniciarAutomatico = () =>{
    set = setInterval(automatico, 1000);
}
const pararAutomatico = () =>{
    clearInterval(set);
}

$amarelo.addEventListener("click", () => ligar("amarelo"));
$verde.addEventListener("click", () => ligar("verde"));
$vermelho.addEventListener("click", () => ligar("vermelho"));
$automatico.addEventListener("click",() => iniciarAutomatico());
$parar.addEventListener("click", () => pararAutomatico());
