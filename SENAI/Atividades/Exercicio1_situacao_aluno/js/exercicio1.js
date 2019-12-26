//Nota mínima para aluno ser aprovado
const notaminima = 5;

//Resgate das inputs
const $nome = document.getElementById("nome");
const $media = document.getElementById("media");
const $situacao = document.getElementById("situacao");
const $calcular = document.getElementById("calcular");

// Resgate dos itens p/ frase extra
const $res = document.getElementById("resultado");
const $icon = document.getElementById("icon");
const $mensagem = document.getElementById("mensagem");

// Cria textos p/ mensagem
const textElyes = document.createTextNode(`Parabéns pelo seu desempenho!`) ;
const textElno = document.createTextNode("Estude mais da próxima vez.");

//Função para avaliar situação do aluno
const avalia = () => {
    
    //verifica se a média digitada é maior ou igual a nota exigida
    if($media.value >= notaminima){
        $situacao.value ="Está Aprovado!";
        mensagem(true);
    }
    else{
        $situacao.value ="Está Reprovado!";
        mensagem(false);
    }
}

//Função para mandar a mensagem
function mensagem (valor){

    //Verifica se o elemento tem algum filho e remove
    while ($mensagem.firstChild){
        $mensagem.removeChild($mensagem.firstChild);
    }

    //Cria o elemento (filho) p
    const p = document.createElement("p");

    //Verifica o valor
    if(valor){
        $res.style = "background: #00a181";
        $icon.style="background-image: url(../icons/happy.png)";
        p.appendChild(textElyes);
        return document.getElementById("mensagem").appendChild(p);
    }
    else{
        $res.style = "background: #a60707";
        $icon.style="background-image: url(../icons/sad.png)";
        p.appendChild(textElno);
        return document.getElementById("mensagem").appendChild(p);
    }
}



$calcular.addEventListener("click", avalia);