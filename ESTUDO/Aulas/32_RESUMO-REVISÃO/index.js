//RESUMO DAS AULAS

    //01 - Write
    document.write("olá");
    
    /* 
        //////////////////////////////////
    */

    //02 - Variaveis 
    var variavel = "meu valor pode variar";

    /* 
        //////////////////////////////////
    */

    //03 - Constantes
    const constante = "meu valor é constante";

    /* 
        //////////////////////////////////
    */

    //04 - Alert
    alert("Meu retorno é vazio");

    /* 
        //////////////////////////////////
    */

    //05 - Prompt
    var retorno = prompt("Digite um valor", "eu retorno o value dessa input");

    /* 
        //////////////////////////////////
    */

    //06 - Confirm
    var booleano = confirm("Deseja saber o meu retorno?");

    /* 
        //////////////////////////////////
    */

    //12 - Switch case
    switch(booleano){
        case true:
            //código
            document.write("<br> Retornei true");
            break;
        case false:
            //código
            break;
        default:
            //sou usado quando não é um dos casos
            break;
    } 

    /* 
        ////////////////////////////////////////////////////
    */

    //13 - Array
    var array = new Array();

    //insere no final
    array.push("índice 2", "índice 3", "indice 4", "teste"); 

    /* 
        ////////////////////////////////////////////////////
    */

    //14 - Array - Inserindo e removendo

    //insere no inicio
    array.unshift("indice 1", "índice 0", "teste"); 

    //remove do inicio
    array.shift();

    //remove do final
    array.pop(); 

    //remove 1 elemento a partir do indice 4
    array.splice(4, 1); 

    /* 
        ////////////////////////////////////////////////////
    */

    //15 - Array - Métodos mais usados
    var arrayEmString = array.join(); //eu separo os elementos por vírgula

    var novoArray = ["indice 4", "indice 5"];

    var colecao = array.concat(novoArray); // eu concateno os arrays

    var tamanho = colecao.length; //eu retorno a quant. de elementos 

    if(colecao.indexOf("indice 6") != -1)
        console.log("Esse elemento existe");

    /* 
        ////////////////////////////////////////////////////
    */
    
    //16 - Matriz
    var matriz = new Array();
                // columa 0   coluna 1    coluna 2
    var line0 = ["item 0-0", "item 0-1", "item 0-2"]; //linha 0
    var line1 = ["item 1-0", "item 1-1", "item 1-2"]; //linha 1

    matriz.push(line0, line1);

    /* 
        ////////////////////////////////////////////////////
    */

    //17 - Incremento e Decremento
    var num = 1;

    num++;
    num += 1;
    num = num + 1;

    num--;
    num -= 1;
    num = num - 1;

    /* 
        ////////////////////////////////////////////////////
    */

    //18 - Laço For e 19 - Laço While
    var cont = 0;

    console.log(matriz.length); //retorno = 2

    while(cont < matriz.length){

        for(var i = 0; i <= matriz.length; i++){
            document.write("<br>" + matriz[cont][i]);
        }

        document.write("<br>");
        cont++;
    }

    /* 
        ////////////////////////////////////////////////////
    */

    //20 - Laço Do while
    var c = 1;
    do{
        document.write("<br><br> Eu (do) sou executado pelo menos uma vez");
        c++;
    }while(c<1);

    /* 
        ////////////////////////////////////////////////////
    */

    //21 - let
    let varia; // sou usada em blocos

    /* 
        ////////////////////////////////////////////////////
    */

    //22 - Try, Cath e Finally
    try{
        //código que pode gerar erro
    }catch(e){
        //tratamento do erro
    }
    finally{
        document.write("<br><br> Eu (Finally) Sempre sou executado")
    }

    /* 
        ////////////////////////////////////////////////////
    */

    //23 - Pegando HTML pelo id
    var body = document.getElementById("idDoBody");

    /* 
        ////////////////////////////////////////////////////
    */

    //27 - Date
    var date = new Date();

    /* 
        ////////////////////////////////////////////////////
    */

    //28 - Form
    document.forms.item(0) // peguei o primeiro form da página

    /* 
        ////////////////////////////////////////////////////
    */

    //30 - Function
    function nome (parametros){
        //codigo
        return "<br><br><br>" + parametros;
    }
    document.write(nome("função chamada"));

    /* 
        ////////////////////////////////////////////////////
    */

    //32 - Eventos
    /*
        onload -> executado qnd a pág carrega
        onmouseover -> quando o mouse fica em cima
        onmouseout -> quando o mouse sai de cima
        onclick -> quando é clicado pelo mouse
    */


