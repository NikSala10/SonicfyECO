import { socket, navigateToMupi} from "../app.js";

export default function renderscreenWelcome() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="welcome">
  
        <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FMUPI.png?alt=media&token=387a4808-96de-4540-97fb-d2ca42b47c02">
        

      </div>
      `;
    socket.on("notificar-pantalla-instructions", (data) => {
      console.log("Usuario registrado:", data.name);
      navigateToMupi("/screenInstructions", { name: data.name });
    });

}
