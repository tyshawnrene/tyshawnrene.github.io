const text = "Tyshawn Rene";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const introScreen = document.getElementById("intro-screen");
  document.body.classList.add("intro-active");

  setTimeout(() => {
    introScreen.style.display = "none";
    document.body.classList.remove("intro-active");
  }, 5000);
});

window.onload = typeEffect;
