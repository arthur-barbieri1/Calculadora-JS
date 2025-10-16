let input = ""; //inicializa a variavel input para armazenar o numero

//seleciona todos os botões de números e adiciona o clique
const numeros = document.querySelectorAll('.num');
numeros.forEach(botao => {
    botao.addEventListener('click', () => {
        //se o ultimo caractere for um operador, reinicia o input com o novo numero
        if (input !== "" && ["+", "-", "*", "/"].includes(input.slice(-1))) {
            input += botao.textContent; // adiciona o numero ao input
        } else {
            input += botao.textContent; // apenas adiciona o numero ao input
        }
        display.textContent = input; // atualiza o display
    });
});

//seleciona todos os botões de operadores e adiciona o clique
const operadores = document.querySelectorAll('.op');
operadores.forEach(botao => {
    botao.addEventListener('click', () => {
        const lastChar = input.slice(-1); //pega o ultimo caractere do input

        //só adiciona o operador se o ultimo caractere NÃO for um operador e input não estiver vazio
        if (input !== "" && !["+", "-", "*", "/"].includes(lastChar)) {
            input += botao.textContent; //adiciona o operador ao input
            display.textContent = input; //atualiza o display
        }
    });
});

//seleciona o botão igual e adiciona um evento de clique
const igual = document.querySelector('.igual');
igual.addEventListener('click', () => {
    if (input !== "") {
        try {
            input = eval(input).toString(); //calcula a expressão e converte de volta para string
            display.textContent = input; //atualiza o display com o resultado
        } catch (error) {
            display.textContent = "Error"; //mostra erro se a expressão for invalida
            input = ""; //limpa o input
        }
    }
});

//seleciona o botão de limpar e adiciona um evento de clique
const limpar = document.querySelector('.limpar');
limpar.addEventListener('click', () => {
    input = ""; //limpa a variavel input
    display.textContent = "0"; //mostra zero no display 
});

//seleciona o display da calculadora
const display = document.getElementById('display');