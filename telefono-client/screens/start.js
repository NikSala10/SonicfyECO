import { makeRequest2, navigateToTelefono, socket } from "../app.js";


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

    let secondsRemaining = 10;
    let buttonClicked = false;
  
    socket.on("game-status", ({ gameStarted }) => {
      if (gameStarted && !buttonClicked) {
        clearInterval(interval);
        navigateToTelefono("/screenSelectArtist", data);
      }
    });
  
    const interval = setInterval(async () => {
      if (secondsRemaining <= 0) {
        clearInterval(interval);
        if (!buttonClicked) {
          await makeRequest2("/update-game-status", "POST", {
            gameStarted: false,
          });
          navigateToTelefono("/timeUp", data);
        }
      } else {
        secondsRemaining--;
      }
    }, 1000);
  
    const start = document.getElementById("start");
    start.addEventListener("click", async () => {
      buttonClicked = true;
      await makeRequest2("/start-game", "POST", { message: "Juego iniciado desde TELÉFONO" });
      navigateToTelefono("/screenSelectArtist", data);
    });
}
