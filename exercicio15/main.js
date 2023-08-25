document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const alturaInput = document.getElementById("altura");
    const raioInput = document.getElementById("raio");
    const resultadoElement = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const altura = parseFloat(alturaInput.value);
      const raio = parseFloat(raioInput.value);
      const P1 = 3.14; // Valor de π (pi)
      
      if (!isNaN(altura) && !isNaN(raio)) {
        const areaBase = P1 * Math.pow(raio, 2);
        const areaLateral = 2 * P1 * raio * altura;
        const areaCilindro = areaBase + areaLateral;
        const quantidadeLitros = areaCilindro / 3 * 2;
        const quantidadeLatas = Math.ceil(quantidadeLitros / 5);
        const custoTotal = quantidadeLatas * 40;
  
        resultadoElement.textContent = `Quantidade de Latas: ${quantidadeLatas} | Custo Total: R$ ${custoTotal.toFixed(2)}`;
      } else {
        resultadoElement.textContent = "Por favor, preencha valores válidos.";
      }
    });
  });
  