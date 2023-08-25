document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const totalPrestacoesInput = document.getElementById("totalPrestacoes");
    const prestacoesPagasInput = document.getElementById("prestacoesPagas");
    const valorPrestacaoInput = document.getElementById("valorPrestacao");
    const totalPagoElement = document.getElementById("totalPago");
    const saldoDevedorElement = document.getElementById("saldoDevedor");
  
    calcularButton.addEventListener("click", function () {
      const totalPrestacoes = parseInt(totalPrestacoesInput.value);
      const prestacoesPagas = parseInt(prestacoesPagasInput.value);
      const valorPrestacao = parseFloat(valorPrestacaoInput.value);
  
      if (!isNaN(totalPrestacoes) && !isNaN(prestacoesPagas) && !isNaN(valorPrestacao)) {
        const totalPago = prestacoesPagas * valorPrestacao;
        const saldoDevedor = (totalPrestacoes - prestacoesPagas) * valorPrestacao;
  
        totalPagoElement.textContent = `Total pago: R$ ${totalPago.toFixed(2)}`;
        saldoDevedorElement.textContent = `Saldo devedor: R$ ${saldoDevedor.toFixed(2)}`;
      } else {
        totalPagoElement.textContent = "";
        saldoDevedorElement.textContent = "Por favor, preencha valores válidos.";
      }
    });
  });
  