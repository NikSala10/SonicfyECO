import { navigateToMupi, socket } from "../app.js";

export default function renderScreenartistaselectM() {
    const app = document.getElementById("app");
    app.innerHTML = `
          <div id="select-artista">
                <h1> Artist selected</h1>
                <p>The artist you selected is:</p>
               <div id="sabrina-selectt">
                 <h3>Sabrina Carpenter</h3>
               </div> 
               <div id="lady-selectt">
                 <h3>Lady Gaga</h3>
               </div> 
               <div id="Shakira-selectt">
                 <h3>Shakira</h3>
               </div> 
               <div id="Arctic-selectt">
                <h3>Arctic Monkeys</h3>
               </div> 
             </div>
        `;
     

  }