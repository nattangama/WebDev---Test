// Script para manipulação de eventos no formulário

// Seleciona os elementos do formulário
const form = document.querySelector('.user-form');
const resetButton = document.querySelector('.btn-secondary');
const submitButton = document.querySelector('.btn-primary');

// Evento de submissão do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtém os valores dos campos
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const phone = document.querySelector('#phone').value;
    const userTypes = Array.from(document.querySelectorAll('input[name="user-type"]:checked')).map(el => el.value);

    // Validações básicas
    if (!email || !password || !phone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exibe os dados no console (ou poderia enviar para o servidor)
    console.log('Dados do Formulário:', { email, password, phone, userTypes });
    alert('Formulário enviado com sucesso!');
});

// Evento de reset do formulário
resetButton.addEventListener('click', () => {
    const confirmation = confirm('Tem certeza de que deseja limpar o formulário?');
    if (!confirmation) {
        // Impede o reset se o usuário cancelar
        event.preventDefault();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".cordion-title"); // Seleciona todos os elementos com a classe "cordion-title"
    const contents = document.querySelectorAll(".cordion-content"); // Seleciona todos os elementos com a classe "cordion-title"

    titles.forEach((title, index) => {
        console.log(title); // Exibe cada elemento no console para depuração
        
        title.addEventListener("click", () => {
            title.classList.toggle("active"); // Alterna a classe "active" no elemento clicado
            contents[index].classList.toggle("active"); // Alterna a classe "active" no elemento clicado

        });
    });
});
