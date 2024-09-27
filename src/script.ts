// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudar(nome: string): string {
    return `Olá ${nome}`;
}

// Manipulação do DOM
window.onload = () => {
    const multiplicarButton = document.getElementById('multiplicarButton') as HTMLButtonElement;
    const saudarButton = document.getElementById('saudarButton') as HTMLButtonElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;

    multiplicarButton.addEventListener('click', () => {
        const resultado = multiplicar(5, 3);
        resultDiv.textContent = `Resultado da multiplicação: ${resultado}`;
    });

    saudarButton.addEventListener('click', () => {
        const saudacao = saudar("José");
        resultDiv.textContent = saudacao;
    });
};
