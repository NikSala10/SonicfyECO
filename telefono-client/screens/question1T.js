import { navigateToTelefono } from "../app.js";


export default function renderScreenQuestion1T(data) {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div id="screenQuestion1">
            <h2>Question1</h2>
            <p>You are about to experience something unique!!1</p>
            <button id="start">Start</button>
        </div>
        `;

  const start = document.getElementById("start");

  start.addEventListener("click", () => {
    async function startGame() {
      const response = await makeRequest("/start-game", "POST", {
        message: "Juego iniciado"
      });
    }
    startGame();
    navigateToTelefono("/");
  });
}
