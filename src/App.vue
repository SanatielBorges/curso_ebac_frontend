<template>
  <div id="app">
    <h1>Calculadora Aritmética</h1>
    <div>
      <select v-model="selectedOperation" @change="calculate">
        <option value="">Selecione a operação</option>
        <option value="add">Adicionar</option>
        <option value="subtract">Subtrair</option>
        <option value="multiply">Multiplicar</option>
        <option value="divide">Dividir</option>
      </select>
    </div>
    <div>
      <input type="number" v-model="firstNumber" placeholder="Número 1" @input="calculate" />
      <input type="number" v-model="secondNumber" placeholder="Número 2" @input="calculate" />
    </div>
    <h2 v-if="errorMessage">{{ errorMessage }}</h2>
    <h2 v-else-if="result !== null">Resultado: {{ result }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstNumber: null,
      secondNumber: null,
      selectedOperation: '',
      result: null,
      errorMessage: ''
    };
  },
  methods: {
    calculate() {
      this.errorMessage = ''; // Reseta a mensagem de erro
      const num1 = parseFloat(this.firstNumber);
      const num2 = parseFloat(this.secondNumber);

      // Verifica se os números estão definidos
      if (isNaN(num1) || isNaN(num2)) {
        this.result = null; // Limpa o resultado
        return; // Retorna se os números não são válidos
      }

      switch (this.selectedOperation) {
        case 'add':
          this.result = (num1 + num2).toFixed(2); // Limita a duas casas decimais
          break;
        case 'subtract':
          this.result = (num1 - num2).toFixed(2); // Limita a duas casas decimais
          break;
        case 'multiply':
          this.result = (num1 * num2).toFixed(2); // Limita a duas casas decimais
          break;
        case 'divide':
          if (num2 === 0) {
            this.errorMessage = 'Erro: Divisão por zero!';
            this.result = null; // Limpa o resultado
          } else {
            this.result = (num1 / num2).toFixed(2); // Limita a duas casas decimais
          }
          break;
        default:
          this.result = null; // Limpa o resultado se nenhuma operação válida for selecionada
          break;
      }
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

input {
  margin: 5px;
  padding: 10px;
  width: 200px;
}

select {
  margin: 5px;
  padding: 10px;
  width: 220px;
}
</style>




