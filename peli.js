const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 30; // ancho de tarjeta + margen

function autoMoveCarousel() {
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0; // Vuelve al inicio
  }

  const moveAmount = -currentIndex * cardWidth;
  track.style.transform = `translateX(${moveAmount}px)`;
}

// Inicia el carrusel automático
setInterval(autoMoveCarousel, 5000); // Cambia cada 3 segundos
