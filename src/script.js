"use strict";
// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}
// Função de saudação
function saudar(nome) {
    return `Olá ${nome}`;
}
// Manipulação do DOM
window.onload = () => {
    const multiplicarButton = document.getElementById('multiplicarButton');
    const saudarButton = document.getElementById('saudarButton');
    const resultDiv = document.getElementById('result');
    multiplicarButton.addEventListener('click', () => {
        const resultado = multiplicar(5, 3);
        resultDiv.textContent = `Resultado da multiplicação: ${resultado}`;
    });
    saudarButton.addEventListener('click', () => {
        const saudacao = saudar("José");
        resultDiv.textContent = saudacao;
    });
};
