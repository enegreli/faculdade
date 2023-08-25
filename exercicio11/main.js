document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const valorAInput = document.getElementById("valorA");
    const valorBInput = document.getElementById("valorB");
    const valorCInput = document.getElementById("valorC");
    const resultadoElement = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const valorA = parseInt(valorAInput.value);
      const valorB = parseInt(valorBInput.value);
      const valorC = parseInt(valorCInput.value);
  
      if (!isNaN(valorA) && !isNaN(valorB) && !isNaN(valorC)) {
        const R = Math.pow(valorA + valorB, 2);
        const S = Math.pow(valorB + valorC, 2);
        const D = (R + S) / 2;
  
        resultadoElement.textContent = `Resultado da Expressão D: ${D}`;
      } else {
        resultadoElement.textContent = "Por favor, preencha valores válidos.";
      }
    });
  });
  