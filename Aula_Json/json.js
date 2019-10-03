const alunos = [
    //Criando um objeto/json
    {
        "nome":"Yasmin", 
        "idade":15, 
        "UF":"SP",
        "salario": 650.00
    },
    {
        "nome":"Alex", 
        "idade":17, 
        "UF":"ES",
        "salario": 700.00
    },
    {
        "nome":"Maria", 
        "idade":28, 
        "UF":"RJ",
        "salario": 1650.00
    },
    {
        "nome":"Pedro", 
        "idade":21, 
        "UF":"SP",
        "salario": 950.00
    } 
];

const $dados = document.getElementById("dados");

const mostrarDados = (json) =>{

    const criarHtml = (valores, aluno) => `${valores} ${aluno.nome} - ${aluno.salario} <br>` ; 
    return json.reduce(criarHtml, "") 

}

//concatena o nome com o salário com 300 a+
const aumentaSalario = (aluno) =>({"nome": aluno.nome, "salario" : aluno.salario + 300}) ;
// retorna true se passar pelo teste lógico : alunos.UF == "SP"
const alunosSP = (alunos) => alunos.UF == "SP";
//retorna true se passar pelo teste lógico : alunos.salario < 1000
const salarioMenorQMil = (alunos) =>  alunos.salario < 1000;

//filtra alunos de SP 
const alunosdeSp = alunos.filter(alunosSP);
//Pega o salário com aumento
const salarioMaiorSp = alunosdeSp.map(aumentaSalario);


$dados.innerHTML = "<br><div> --- Alunos em SP e seus salarios (com aumento) --- </div><br>";
$dados.innerHTML += mostrarDados(alunosdeSp.map(aumentaSalario));


$dados.innerHTML += "<br><div> --- Alunos em SP com salario menor que mil (Antigo) --- </div><br>";
$dados.innerHTML += mostrarDados(alunosdeSp.filter(salarioMenorQMil));

$dados.innerHTML += "<br><div> --- Alunos em SP com salario menor que mil (Atual)--- </div><br>";
$dados.innerHTML += mostrarDados(salarioMaiorSp.filter(salarioMenorQMil));























// const mostrarDados = (json) =>{

//     // let valores = "";
//     // const tamanho = json.length
//     // for (let i = 0; i < tamanho; i++){
//     //     valores += `${json[i].nome} - ${json[i].idade} - ${json[i].UF}<br>`;
//     // }
//     // return valores;

//     const criarHtml = (valores, aluno) => `${valores} ${aluno.nome} - ${aluno.idade} <br>` ; 
//     //acumula na variável valores os dados do json que se deseja

//     return json.reduce(criarHtml, "") //reduz um array vulgo o alunos
// }

// const alunosSP = (alunos) => alunos.UF == "SP";
// const somarSalario = (acc, aluno) => acc + aluno.salario;
// const aumentaSalario = (aluno) =>({"nome": aluno.nome, "idade" : aluno.salario + 100}) ;

// $dados.innerHTML = mostrarDados(alunos);
// $dados.innerHTML += "<br><div> --- Alunos em SP --- </div><br>";
// $dados.innerHTML += mostrarDados(alunos.filter(alunosSP)); // filtra os dados de um array

// $dados.innerHTML += "<br><div> --- Total de Todos os Salarios --- </div><br>";
// $dados.innerHTML += alunos.reduce(somarSalario, 0);

// $dados.innerHTML += "<br><br><div> --- Novos Salarios --- </div><br>";
// $dados.innerHTML += mostrarDados(alunos.map(aumentaSalario));//map altera um array

// $dados.innerHTML += "<br><br><div> --- Novos Salarios --- </div><br>";
// $dados.innerHTML += mostrarDados(alunos.map(aumentaSalario));