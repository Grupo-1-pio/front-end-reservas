// Función para inicializar los eventos de clic en las tarjetas
function initializeMovieCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title =
        card.querySelector("p")?.textContent || "Título no disponible";
      const image =
        card.querySelector("img")?.src || "/api/placeholder/300/450";
      openModal({ title, image });
    });
  });
}

// Función para abrir el modal
function openModal(movie) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <h2 class="movie-title">${movie.title}</h2>
            <div class="seats"></div>
        </div>
    `;
  document.body.appendChild(modal);

  const seats = modal.querySelector(".seats");
  for (let i = 1; i <= 40; i++) {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.textContent = i;
    seat.addEventListener("click", toggleSeat);
    seats.appendChild(seat);
  }

  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}

// Función para alternar la selección de asientos
function toggleSeat(event) {
  event.target.classList.toggle("selected");
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", initializeMovieCards);
