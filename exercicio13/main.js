document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const valorAInput = document.getElementById("valorA");
    const valorBInput = document.getElementById("valorB");
    const valorCInput = document.getElementById("valorC");
    const resultadoElement = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const valorA = parseFloat(valorAInput.value);
      const valorB = parseFloat(valorBInput.value);
      const valorC = parseFloat(valorCInput.value);
  
      if (!isNaN(valorA) && !isNaN(valorB) && !isNaN(valorC)) {
        const discriminante = valorB ** 2 - 4 * valorA * valorC;
  
        if (discriminante > 0) {
          const x1 = (-valorB + Math.sqrt(discriminante)) / (2 * valorA);
          const x2 = (-valorB - Math.sqrt(discriminante)) / (2 * valorA);
          resultadoElement.textContent = `Raízes: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
        } else if (discriminante === 0) {
          const x = -valorB / (2 * valorA);
          resultadoElement.textContent = `Raíz única: x = ${x.toFixed(2)}`;
        } else {
          resultadoElement.textContent = "Não existem raízes reais.";
        }
      } else {
        resultadoElement.textContent = "Por favor, preencha valores válidos.";
      }
    });
  });
  