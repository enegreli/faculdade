document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const custoFabricaInput = document.getElementById("custoFabrica");
    const precoFinalElement = document.getElementById("precoFinal");
  
    calcularButton.addEventListener("click", function () {
      const custoFabrica = parseFloat(custoFabricaInput.value);
  
      if (!isNaN(custoFabrica)) {
        const percentagemRevendedor = 0.25;
        const custoImpostos = 0.45 * custoFabrica;
  
        const precoFinal = custoFabrica + (custoFabrica * percentagemRevendedor) + custoImpostos;
        precoFinalElement.textContent = `Preço final: R$ ${precoFinal.toFixed(2)}`;
      } else {
        precoFinalElement.textContent = "Por favor, digite um valor válido.";
      }
    });
  });
  