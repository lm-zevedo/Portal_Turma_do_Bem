// Acordeão do "Passo a passo" (comoFunciona.html)


for (let i = 1; i <= 5; i++) {
  // Seleciona o botão, o texto e o card de cada passo 
  const botao = document.getElementById(`botao-passo-${i}`);
  const texto = document.getElementById(`texto-passo-${i}`);
  const passo = document.getElementById(`passo-${i}`);

  botao.addEventListener("click", () => {
    if (botao.getAttribute("aria-expanded") === "true") {
      // Está aberto: fecha
      texto.classList.add("escondido");
      passo.classList.remove("passo-aberto");
      botao.setAttribute("aria-expanded", "false");
    } else {
      // Está fechado: abre
      texto.classList.remove("escondido");
      passo.classList.add("passo-aberto");
      botao.setAttribute("aria-expanded", "true");
    }
  });
}