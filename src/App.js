import React, { useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaEmMetros = parseFloat(altura);
      const pesoEmKg = parseFloat(peso);
      const imcCalculado = (
        pesoEmKg /
        (alturaEmMetros * alturaEmMetros)
      ).toFixed(2);
      setImc(imcCalculado);
      classificarIMC(imcCalculado);
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao("Obesidade grau I");
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao("Obesidade grau II");
    } else {
      setClassificacao("Obesidade grau III");
    }
  };

  return (
    <div className="container">
      <h1>Calculadora IMC</h1>
      <div className="inputs">
        <div>
          <label>Peso</label>
          <input
            type="number"
            placeholder="Ex: 56.3"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div>
          <label>Altura (m)</label>
          <input
            type="number"
            placeholder="Ex: 1.80"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {imc && (
        <div className="resultado">
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
