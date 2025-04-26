import { socket, navigateToMupi} from "../app.js";

export default function renderscreenwelcome() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="welcome">
        <h2>Welcome</h2>
        <h4>to the</h4>
        <h1>Sonicfy!</h1>
        <h4>experience!</h4>
        <h5Take part in this challenge!</h5>
        <p>Win a ticket to your favorite</p>
        <p>Artist's Concert</p>

    </div>
      `;
    socket.on("notificar-pantalla-instructions", (data) => {
      console.log("Usuario registrado:", data.name);
      navigateToMupi("/screenInstructions", { name: data.name });
    });

}
