document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("updateButton");
    const chequeInput = document.getElementById("chequeInput");
    const resultElement = document.getElementById("result");
  
    const initialBalance = 500;
  
    updateButton.addEventListener("click", function () {
      const chequeAmount = parseFloat(chequeInput.value);
      if (!isNaN(chequeAmount)) {
        const newBalance = initialBalance + chequeAmount;
        resultElement.textContent = `Novo saldo: R$ ${newBalance.toFixed(2)}`;
      } else {
        resultElement.textContent = "Por favor, digite um valor válido.";
      }
    });
  });
  