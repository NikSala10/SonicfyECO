import { navigateToTelefono } from "../app.js";


export default function renderScreenStart(data) {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div id="screenStart">
            <h2>Welcome to the musical challenge</h2>
            <p>You are about to experience something unique!!1</p>
            <button id="start">Start</button>
        </div>
        `;

  const start = document.getElementById("start");

  start.addEventListener("click", () => {
    navigateToTelefono("/");
  });
}
