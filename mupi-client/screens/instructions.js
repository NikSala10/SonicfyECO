import { navigateToMupi, socket } from "../app.js";

export default function renderScreenInstructions() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div id="screenInstructions">
          <h1>Instructions</h1>
          <button id="get-btn">Get users</button>
          <button id="change-screen-btn">Change screen on app 2</button>
      </div>
      `;
    socket.on("startGame", (data) => {
        console.log("Evento startGame recibido", data);
    navigateToMupi("/screenFan1M");
    });
}
