// Criar um array de objetos com alunos e suas notas
const alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 7 },
  { nome: "Ana", nota: 9 },
  { nome: "Carlos", nota: 4 },
  { nome: "Julia", nota: 6 },
  { nome: "Ricardo", nota: 8 },
  { nome: "Luisa", nota: 5 },
];

// Criar uma função que retorna os alunos com nota maior ou igual a 6
function getAlunosComNotaMaiorOuIgualA6(alunos) {
  return alunos.filter((aluno) => aluno.nota >= 6);
}

// Criar uma função que exibe a lista de alunos
function exibirAlunos(alunos) {
  const alunosListElement = document.getElementById("alunos-list");
  alunosListElement.innerHTML = "";
  alunos.forEach((aluno) => {
    const alunoRow = document.createElement("li");
    alunoRow.textContent = aluno.nome;
    alunosListElement.appendChild(alunoRow);
  });
}

// Criar uma função que exibe a lista de alunos com notas maiores ou iguais a 6
function exibirAlunosComNotasMaiores(alunos) {
  const alunosComNotasMaioresListElement = document.getElementById(
    "alunos-com-notas-maiores-list"
  );
  alunosComNotasMaioresListElement.innerHTML = "";
  getAlunosComNotaMaiorOuIgualA6(alunos).forEach((aluno) => {
    const alunoRow = document.createElement("li");
    alunoRow.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;
    alunosComNotasMaioresListElement.appendChild(alunoRow);
  });
}

// Exibir a lista de alunos
exibirAlunos(alunos);

// Selecione os elementos do DOM
const revealButton = document.getElementById("reveal-button");
const closeButton = document.getElementById("close-button");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");

// Adicionar evento ao botão Revelar Notas
revealButton.addEventListener("click", () => {
  // Adicione a classe 'show' ao popup e ao overlay
  popup.classList.add("show");
  overlay.classList.add("show");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  // Chame a função para exibir os alunos com notas maiores
  exibirAlunosComNotasMaiores(alunos);
});

// Adicionar evento ao botão Fechar
closeButton.addEventListener("click", () => {
  // Remova a classe 'show' do popup e do overlay
  popup.classList.remove("show");
  overlay.classList.remove("show");
});
