document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const valorPrestacaoInput = document.getElementById("valorPrestacao");
    const taxaJurosInput = document.getElementById("taxaJuros");
    const diasAtrasoInput = document.getElementById("diasAtraso");
    const resultadoElement = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const valorPrestacao = parseFloat(valorPrestacaoInput.value);
      const taxaJuros = parseFloat(taxaJurosInput.value);
      const diasAtraso = parseInt(diasAtrasoInput.value);
  
      if (!isNaN(valorPrestacao) && !isNaN(taxaJuros) && !isNaN(diasAtraso)) {
        const prestacaoAtraso = valorPrestacao + (valorPrestacao * (taxaJuros / 100) * diasAtraso);
        resultadoElement.textContent = `Valor da Prestação em Atraso: R$ ${prestacaoAtraso.toFixed(2)}`;
      } else {
        resultadoElement.textContent = "Por favor, preencha valores válidos.";
      }
    });
  });
  