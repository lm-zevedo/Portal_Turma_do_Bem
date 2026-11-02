// Simulador de doação (simulacao.html)

const campoValor = document.getElementById("valor-compra");
const botaoCalcular = document.getElementById("botao-calcular");
const mensagem = document.getElementById("mensagem-simulador");
const resultado = document.getElementById("resultado-simulador");
const textoTotal = document.getElementById("valor-total");


const regexValor = /^\d+([.,]\d{1,2})?$/;

// Mostra o número no formato R$ 0,48
const formatarReais = (numero) => `R$ ${numero.toFixed(2).replace(/\./, ",")}`;

// Evento de clique no botão
botaoCalcular.addEventListener("click", () => {
  const texto = campoValor.value;

  if (regexValor.test(texto) && Number(texto.replace(/,/, ".")) > 0) {
    const valor = Number(texto.replace(/,/, "."));
    const repasse = valor * 0.01; // 1% do parceiro 

    textoTotal.textContent = formatarReais(repasse);

    // Feedback visual de sucesso
    mensagem.textContent = "Cálculo feito! Veja quanto vai para a Turma do Bem:";
    mensagem.classList.remove("erro");
    mensagem.classList.add("sucesso");
    resultado.classList.remove("escondido");
  } else {
    // Feedback visual de erro
    mensagem.textContent = "Digite um valor válido maior que zero, como 47,60.";
    mensagem.classList.remove("sucesso");
    mensagem.classList.add("erro");
    resultado.classList.add("escondido");
  }
});

// Evento de input: ao digitar de novo, limpa a mensagem e esconde o resultado
campoValor.addEventListener("input", () => {
  mensagem.textContent = "";
  mensagem.classList.remove("erro");
  mensagem.classList.remove("sucesso");
  resultado.classList.add("escondido");
});