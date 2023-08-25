function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;
  
    document.getElementById('soma').textContent = `Soma: ${soma}`;
    document.getElementById('subtracao').textContent = `Subtração: ${subtracao}`;
    document.getElementById('multiplicacao').textContent = `Multiplicação: ${multiplicacao}`;
    
    if (isNaN(divisao)) {
      document.getElementById('divisao').textContent = 'Divisão: Não é possível dividir por zero';
    } else {
      document.getElementById('divisao').textContent = `Divisão: ${divisao}`;
    }
  }
  