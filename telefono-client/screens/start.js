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

  const start = document.getElementById("start");

  start.addEventListener("click", () => {
    async function startGame() {
      const response = await makeRequest2("/start-game", "POST", {
        message: "Juego iniciado"
      });
    }
    startGame();
    navigateToTelefono("/screenSelectArtist", data);
  });
}
