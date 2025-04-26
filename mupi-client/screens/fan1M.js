import { navigateToMupi, socket } from "../app.js";

export default function navigateToMupi() {
    const app = document.getElementById("app");
    app.innerHTML = `
          <div id="select-artista">
            <h1>Prove that you're the fan!</h1>
        
        <p>Pick your favorite artist!</p>
        <p>If you get them right... the ticket could be yours!</p>
        <p>Ready for the challenge?</p>
        <p>Good luck!</p>
      
        </div>
        `;
     
  }