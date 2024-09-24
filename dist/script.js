"use strict";

// Criar um array de objetos com alunos e suas notas
var alunos = [{
  nome: "João",
  nota: 8
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Pedro",
  nota: 7
}, {
  nome: "Ana",
  nota: 9
}, {
  nome: "Carlos",
  nota: 4
}, {
  nome: "Julia",
  nota: 6
}, {
  nome: "Ricardo",
  nota: 8
}, {
  nome: "Luisa",
  nota: 5
}];

// Criar uma função que retorna os alunos com nota maior ou igual a 6
function getAlunosComNotaMaiorOuIgualA6(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Criar uma função que exibe a lista de alunos
function exibirAlunos(alunos) {
  var alunosListElement = document.getElementById("alunos-list");
  alunosListElement.innerHTML = "";
  alunos.forEach(function (aluno) {
    var alunoRow = document.createElement("li");
    alunoRow.textContent = aluno.nome;
    alunosListElement.appendChild(alunoRow);
  });
}

// Criar uma função que exibe a lista de alunos com notas maiores ou iguais a 6
function exibirAlunosComNotasMaiores(alunos) {
  var alunosComNotasMaioresListElement = document.getElementById("alunos-com-notas-maiores-list");
  alunosComNotasMaioresListElement.innerHTML = "";
  getAlunosComNotaMaiorOuIgualA6(alunos).forEach(function (aluno) {
    var alunoRow = document.createElement("li");
    alunoRow.textContent = "".concat(aluno.nome, " - Nota: ").concat(aluno.nota);
    alunosComNotasMaioresListElement.appendChild(alunoRow);
  });
}

// Exibir a lista de alunos
exibirAlunos(alunos);

// Selecione os elementos do DOM
var revealButton = document.getElementById("reveal-button");
var closeButton = document.getElementById("close-button");
var popup = document.getElementById("popup");
var overlay = document.getElementById("overlay");

// Adicionar evento ao botão Revelar Notas
revealButton.addEventListener("click", function () {
  // Adicione a classe 'show' ao popup e ao overlay
  popup.classList.add("show");
  overlay.classList.add("show");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  // Chame a função para exibir os alunos com notas maiores
  exibirAlunosComNotasMaiores(alunos);
});

// Adicionar evento ao botão Fechar
closeButton.addEventListener("click", function () {
  // Remova a classe 'show' do popup e do overlay
  popup.classList.remove("show");
  overlay.classList.remove("show");
});