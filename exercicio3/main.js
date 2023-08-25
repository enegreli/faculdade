document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
  
    calculateButton.addEventListener("click", function () {
      const inputNumber = parseInt(numberInput.value);
      if (!isNaN(inputNumber)) {
        const squaredNumber = inputNumber * inputNumber;
        resultElement.textContent = `O quadrado de ${inputNumber} é ${squaredNumber}.`;
      } else {
        resultElement.textContent = "Por favor, digite um número válido.";
      }
    });
  });
  