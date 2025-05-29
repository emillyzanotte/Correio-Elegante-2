function abrirCarta() {
  const carta = document.getElementById("carta");
  const botao = document.getElementById("botao");

  carta.classList.remove("escondido");
  botao.style.display = "none";
}
