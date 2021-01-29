/*1º ETAPA: 'Puxar todos os Elementos DOM necessários
Aqui todos os INPUTS dos formulários foram trazidos do HTML para o ambiente JS via DOM */
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// 2º ETAPA: Adicionar um Event Listener para ser ativado quando o submit for clicado.
form.addEventListener('submit', function (event) { //Função anônima
    event.preventDefault();//método .preventDefault() previne comportamento padrão do 'submit' de ser executado.
    //VALIDAÇÃO DO CAMPO 'NOME COMPLETO'
    if (fullname.value === '') {
        //Aqui é o que vai acontecer caso 'fullname' esteja vazio
        showError(fullname, 'Digite seu nome completo.');
    } else {
        //Aqui é o que vai acontecer caso 'fullname' não esteja vazio
        showSuccess(fullname);
    }
    //VALIDAÇÃO DO CAMPO 'USERNAME'
    if (username.value === '') {
        //Aqui é o que vai acontecer caso 'username' esteja vazio
        showError(username, 'Escolha um nome de usuário.');
    } else {
        //Aqui é o que vai acontecer caso 'username' não esteja vazio
        showSuccess(username);
    }
    //VALIDAÇÃO DO CAMPO 'EMAIL'
    if (email.value === '') {
        //Aqui é o que vai acontecer caso 'email' esteja vazio
        showError(email, 'Informe um e-mail válido.');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Informe um e-mail válido.')
    } else {
        //Aqui é o que vai acontecer caso 'email' não esteja vazio
        showSuccess(email);
    }
    //VALIDAÇÃO DO CAMPO 'SENHA'
    if (password.value === '') {
        //Aqui é o que vai acontecer caso 'password' esteja vazio
        showError(password, 'Por favor, escolha uma senha.');
    } else {
        //Aqui é o que vai acontecer caso 'password' não esteja vazio
        showSuccess(password);
    }
    //VALIDAÇÃO DO CAMPO 'CONFIRMAR SENHA'
    if (password2.value != password.value) {
        //Aqui é o que vai acontecer caso 'password2' esteja vazio
        showError(password2, 'As senhas precisam ser iguais.');
    } else if (password2.value === password.value && password2.value != '') {
        //Aqui é o que vai acontecer caso 'password2' não esteja vazio
        showSuccess(password2);
    }
})

// 3º ETAPA: Criar funções para controlar a validação (showError, showSuccess);

//MENSAGEM DE ERRO
function showError(input, message) {
    const formControl = input.parentElement; /*A const formControl vai armazenar o parentElement do elemento 
    que for passado para a função 'showError' como um argumento (input)*/
    formControl.className = 'form-control error-visible'; /*Adiciona a classe 'error-visible' ao elemento que
    já possui a classe form-control, tornando o elemento visível (ver CSS)*/
    const small = formControl.querySelector('small'); //Armazena o conteúdo da tag small dentro da const 'small'
    small.innerText = message;
}

//MENSAGEM DE SUCESSO
function showSuccess(input) {
    const formControl = input.parentElement; /*A const formControl vai armazenar o parentElement do elemento 
    que for passado para a função 'showError' como um argumento (input)*/
    formControl.className = 'form-control success'; /*Adiciona a classe 'success' ao elemento que
    já possui a classe form-control, tornando o elemento visível E VALIDADO. (ver CSS)*/

}

//VALIDAÇÃO DE EMAIL 
function isValidEmail(email) { //Email é validado através de uma Regular Expression.
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}