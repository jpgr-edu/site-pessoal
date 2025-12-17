const btn = document.getElementById("playMusic");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play().catch(() => {
      alert("Clique novamente para liberar o áudio.");
    });
    btn.textContent = "⏸ Pausar";
  } else {
    music.pause();
    btn.textContent = "▶ Música";
  }
});
