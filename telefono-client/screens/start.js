import { makeRequest2, navigateToTelefono } from "../app.js";


export default function renderScreenStart(data) {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div id="screenStart">
            <h2>Welcome to the</h2>
            <h2>Musical Challenge</h2>
            <div>
              <p>You are about to experience something unique!!1</p>
              <button id="start">Start</button>
              <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Fmicro-center.png?alt=media&token=fc646eab-f107-4b69-ba35-603303c84132">
            </div>
        </div>
        `;

        let secondsRemaining = 6;
        let buttonClicked = false; // Controla si el botón fue presionado
      
        // Función para verificar si el juego ha comenzado
        const checkGameStarted = async () => {
          const response = await makeRequest2("/check-game-start", "GET");
          if (response.gameStarted) {
            clearInterval(interval);
            navigateToTelefono("/screenSelectArtist", data); // Navegar a la pantalla cuando el juego se haya iniciado
          }
        };
      
        // Intervalo que se ejecuta cada segundo
        const interval = setInterval(() => {
          secondsRemaining--;
      
          if (secondsRemaining <= 0) {
            clearInterval(interval);
            if (!buttonClicked) {
              navigateToTelefono("/TimeUpT", data); // Navegar a la pantalla de tiempo agotado si no se presionó el botón
            }
          } else {
            checkGameStarted();
          }
        }, 1000);
      
        const start = document.getElementById("start");
        start.addEventListener("click", () => {
          // Si el usuario hace clic en "Start"
          buttonClicked = true; // Marca que el botón fue presionado
          async function startGame() {
            const response = await makeRequest2("/start-game", "POST", {
              message: "Juego iniciado"
            });
          }
          startGame();
          navigateToTelefono("/screenSelectArtist", data); // Navega a la pantalla de selección de artista inmediatamente
        });
}
