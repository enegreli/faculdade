document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const cotacaoDolarInput = document.getElementById("cotacaoDolar");
    const quantidadeDolaresInput = document.getElementById("quantidadeDolares");
    const resultadoElement = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const cotacaoDolar = parseFloat(cotacaoDolarInput.value);
      const quantidadeDolares = parseFloat(quantidadeDolaresInput.value);
  
      if (!isNaN(cotacaoDolar) && !isNaN(quantidadeDolares)) {
        const valorEmReais = cotacaoDolar * quantidadeDolares;
        resultadoElement.textContent = `Valor em Reais: R$ ${valorEmReais.toFixed(2)}`;
      } else {
        resultadoElement.textContent = "Por favor, preencha valores válidos.";
      }
    });
  });
  