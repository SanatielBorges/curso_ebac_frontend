// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}
// Função de saudação
function saudar(nome) {
    return "Ol\u00E1 ".concat(nome);
}
// Manipulação do DOM
window.onload = function () {
    var multiplicarButton = document.getElementById('multiplicarButton');
    var saudarButton = document.getElementById('saudarButton');
    var resultDiv = document.getElementById('result');
    multiplicarButton.addEventListener('click', function () {
        var resultado = multiplicar(5, 3);
        resultDiv.textContent = "Resultado da multiplica\u00E7\u00E3o: ".concat(resultado);
    });
    saudarButton.addEventListener('click', function () {
        var saudacao = saudar("José");
        resultDiv.textContent = saudacao;
    });
};
