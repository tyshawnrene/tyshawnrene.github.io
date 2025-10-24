const text = "Tyshawn Rene";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
window.onload = typeEffect;
