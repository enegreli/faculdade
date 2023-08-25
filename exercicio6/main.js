document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const nomeAlunoInput = document.getElementById("nomeAluno");
    const nota1Input = document.getElementById("nota1");
    const nota2Input = document.getElementById("nota2");
    const nota3Input = document.getElementById("nota3");
    const resultadoElement = document.getElementById("resultado");
  
    calcularButton.addEventListener("click", function () {
      const nomeAluno = nomeAlunoInput.value;
      const nota1 = parseFloat(nota1Input.value);
      const nota2 = parseFloat(nota2Input.value);
      const nota3 = parseFloat(nota3Input.value);
  
      if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        const media = (nota1 + nota2 + nota3) / 3;
        resultadoElement.textContent = `Aluno: ${nomeAluno}\nMédia: ${media.toFixed(2)}`;
      } else {
        resultadoElement.textContent = "Por favor, preencha notas válidas.";
      }
    });
  });
  