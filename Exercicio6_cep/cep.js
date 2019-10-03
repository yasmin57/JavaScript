// Variaveis
const $cep = document.querySelector( '#cep' );
const $logradouro = document.querySelector( '#logradouro' );
const $bairro = document.querySelector( '#bairro' );
const $cidade = document.querySelector( '#cidade' );
const $estado = document.querySelector( '#estado' );

const encontrarCep = () =>{
    const cep = $cep.value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    // fetch acontece depois - api then - promessa 
    fetch( url )
        //pega a resposta da url para retornar um json
        .then( resposta => resposta.json() )
        // Resposta do json
        .then( resposta => mostrarCep( resposta ) );
    //Atribue os dados da API nas caixas de texto
    const mostrarCep = ( endereco ) => {
        $logradouro.value = endereco.logradouro;
        $bairro.value = endereco.bairro;
        $cidade.value = endereco.cidade;
        $estado.value = endereco.estado;
    }
}

// blur - ação acontece quando sair do campo
$cep.addEventListener( 'blur', encontrarCep );