const seats = document.querySelectorAll(".seat"); // Selección de clase

function updateSeatState() {
  seats.forEach((seat) => {
    const seatId = seat.innerText;

    if (sessionStorage.getItem(seatId) === "occupied") {
      seat.style.backgroundColor = "red"; // Ocupado
    } else {
      seat.style.backgroundColor = "green"; // Disponible
    }
  }); // Verifica si el estado del asiento está guardado
} // Actualiza el estado del asiento

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    const seatId = seat.innerText;

    if (seat.style.backgroundColor === "green") {
      seat.style.backgroundColor = "red"; // Cambia a ocupado
      sessionStorage.setItem(seatId, "occupied"); // Para guardar el estado en sessionStorage
    } else {
      seat.style.backgroundColor = "green"; // Cambia a disponible
      sessionStorage.removeItem(seatId); // Para eliminar el estado de sessionStorage
    }
  });
}); // Con esto definimos si el asiento está ocupado o no

updateSeatState(); // Para actualizar el estado al reiniciar la página
