const btn = document.getElementById("btnMusica");
const player = document.getElementById("player");
const nome = document.getElementById("nome");

btn.addEventListener("click", () => {
  player.classList.remove("hidden"); // mostra player
  nome.classList.add("tremor");       // ativa tremor
  btn.style.display = "none";         // esconde botão
});


