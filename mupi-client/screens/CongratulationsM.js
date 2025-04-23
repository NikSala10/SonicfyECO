import { navigateToMupi, socket } from "../app.js";

export default function navigateToMupi() {
    const app = document.getElementById("app");
    app.innerHTML = `
          <div id="Congratulations!">
            <h1>Congratulations!</h1>
        
        <h5>You won a ticket to Sabrina's next concert.</h5>

        
        <h5>Your ticket with all the information will be sent to the email address you enter.</h5>
        <p>If there are any irregularities, please contact us at spotify@gmail.com</p>
      
      
        </div>
        `;
      socket.on("startGame", (data) => {
          console.log("Evento startGame recibido", data);
      navigateToMupi("/screenQuestion1M");
      });
  }