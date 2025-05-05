import { socket, navigateToMupi} from "../app.js";

export default function renderscreenWelcome() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="welcome">
        <h2>Welcome</h2>
        <h4>to the</h4>
        <h1>Sonicfy!</h1>
        <h4>experience!</h4>
        <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FPORTADA.png?alt=media&token=13834b6d-214f-4f46-b9a6-fe38b5ff39ca">
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
