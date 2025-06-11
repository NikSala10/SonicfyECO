import { socket, navigateToMupi} from "../app.js";

export default function renderscreenWelcome() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="welcome">
  
        <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FMUPI%20(1).png?alt=media&token=147fbd4c-07c1-4b1b-a504-36d5596c4902">
        

      </div>
      `;
    socket.on("notificar-pantalla-instructions", (data) => {
      console.log("Usuario registrado:", data.name);
      navigateToMupi("/screenInstructions", { name: data.name });
    });

}
