//poderia usar selector query, que usa identificador igual ao css
const $cep = document.getElementById('cep');
const $logradouro = document.querySelector('#logradouro');
const $bairro = document.querySelector('#bairro');
const $cidade = document.querySelector('#cidade');
const $estado = document.querySelector('#estado');


const encontrarCep = () =>
{
    const cep = $cep.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch (url).then ( res => (res.json()) )
        .then(dados => mostrarCep(dados));           //callback gera uma response da api

    const mostrarCep = ( end )=>
    {
        console.log(end);
        $logradouro.value = end.logradouro;
        $bairro.value = end.bairro;
        $cidade.value = end.localidade;
        $estado.value = end.uf;
    }
}

$cep.addEventListener( 'blur', encontrarCep );