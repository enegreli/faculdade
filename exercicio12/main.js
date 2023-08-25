document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const tempFahrenheitInput = document.getElementById("tempFahrenheit");
    const resultadoElement = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const tempFahrenheit = parseFloat(tempFahrenheitInput.value);
  
      if (!isNaN(tempFahrenheit)) {
        const tempCelsius = (tempFahrenheit - 32) * 5 / 9;
        resultadoElement.textContent = `Temperatura em Celsius: ${tempCelsius.toFixed(2)}°C`;
      } else {
        resultadoElement.textContent = "Por favor, digite um valor válido.";
      }
    });
  });
  