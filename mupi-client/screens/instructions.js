import { socket } from "../app";

export default function renderScreenInstructions() {
  const app = document.getElementById("app");
 
    socket.on("notificar-pantalla-instructions", (data) => {
        console.log("Evento recibido: usuario ingresado", data);
        app.innerHTML = `
        <div id="screenInstructions">
          <h2>Screen 1</h2>
          <button id="get-btn">Get users</button>
          <button id="change-screen-btn">Change screen on app 2</button>
      </div>
        `;
    });
}
