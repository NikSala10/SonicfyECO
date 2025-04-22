import { socket, navigateToMupi} from "../app.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="screen1">
        <h2>Welcome</h2>
    </div>
      `;
    socket.on("notificar-pantalla-instructions", (data) => {
      console.log("Usuario registrado:", data.name);
      navigateToMupi("/screenInstructions", { name: data.name });
    });

}
