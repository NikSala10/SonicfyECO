import { navigateToMupi, socket } from "../app.js";

export default function renderScreenCongratulationsM() {
    const app = document.getElementById("app");
    app.innerHTML = `
          <div id="Congratulations!">
            <h1>Congratulations!</h1>
        
        
        <div id="sabrina-exito">
        <h5>You won a ticket to Sabrina's next concert.</h5>
        </div>
            
        <div id="lady-exito">
        <h5>You won a ticket to Lady gaga's next concert.</h5>
        </div>
            
        <div id="shakira-exito">
        <h5>You won a ticket to Shakira's next concert. </h5>
        </div>
            
        <div id="artic-exito">
        <h5>You won a ticket to the next Arctic Monkeys concert.  </h5>
        </div>
        
        <h5>Your ticket with all the information will be sent to the email address you enter.</h5>
        <p>If there are any irregularities, please contact us at spotify@gmail.com</p>
      
      
        </div>
        `;
  }