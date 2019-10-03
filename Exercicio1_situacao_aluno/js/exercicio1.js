const notaminima = 5;

const $nome = document.getElementById("nome");
const $media = document.getElementById("media");
const $situacao = document.getElementById("situacao");
const $calcular = document.getElementById("calcular");
const $icon = document.getElementById("icon");
const $td_obs = document.getElementById("td_obs");
const $obs = document.getElementById("obs");
const pEl = document.createElement("p");
const textElap = document.createTextNode(`Parabéns!`) ;
const textElre = document.createTextNode("Estude mais da próxima vez");


const  calc = () =>{
    if( $media.value > notaminima ){
        $situacao.value ="Está Aprovado!";
        $td_obs.style = "background: #00a181";
        $icon.style="background-image: url(../icons/happy.png)";
        pEl.appendChild(textElap);
        document.getElementById("obs").appendChild(pEl);
    }
    else{
        $situacao.value ="Está Reprovado!";
        $td_obs.style = "background: #a60707";
        $icon.style="background-image: url(../icons/sad.png)";
        pEl.appendChild(textElre);
        document.getElementById("obs").appendChild(pEl);
    }
}




$calcular.addEventListener("click", calc);