document.addEventListener("DOMContentLoaded", function () {
    const trocarButton = document.getElementById("trocarButton");
    const valorAInput = document.getElementById("valorA");
    const valorBInput = document.getElementById("valorB");
    const resultadoElement = document.getElementById("resultado");
  
    trocarButton.addEventListener("click", function () {
      const valorA = parseInt(valorAInput.value);
      const valorB = parseInt(valorBInput.value);
  
      if (!isNaN(valorA) && !isNaN(valorB)) {
        const temp = valorA;
        valorAInput.value = valorB;
        valorBInput.value = temp;
        resultadoElement.textContent = `Valores trocados: A = ${valorAInput.value}, B = ${valorBInput.value}`;
      } else {
        resultadoElement.textContent = "Por favor, preencha valores válidos.";
      }
    });
  });
  