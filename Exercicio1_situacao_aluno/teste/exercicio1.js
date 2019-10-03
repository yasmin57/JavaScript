const notaminima = 5;

const $nome = document.getElementById("Nome");
const $media = document.getElementById("media");
const $situacao = document.getElementById("situacao");
const $body = document.getElementById("body");
const $calcular = document.getElementById("calcular");


const  calc = () =>{
    if( $media.value > notaminima ){
        $situacao.value = "Parabéns "+ $nome.value +" Aprovado!";
        $body.style = "background: green";

    }
    else{
        $situacao.value = "Reprovado!";
        $body.style = "background: red";
        $situacao.value = "Poxa, "+ $nome.value + " você foi reprovado ;-;";
    }
}

$calcular.addEventListener("click", calc);