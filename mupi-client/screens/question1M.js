// import { socket, navigateToMupi} from "../app.js";

export default function renderScreenQuestion1M() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="screen1">
      <h1>Challenge 1</h1>
      <p><strong>Your time for this 6 seconds to respond if you do not respond in the given time you will lose</p>
      <div id="sabrina">
          <h5>In what year did Sabrina Carpenter release her debut album "Eyes Wide Open"?</h5>
      
          <p>A 2014</p>
          <p>B 2015</p>
          <p>C 2016</p>
      </div>
      <div id="lady">
      <h5>What was Lady Gaga's first single to reach #1 on the Billboard Hot 100?</h5>
    
      <p>A  Poker Face</p>
      <p>B  Just Dance</p>
      <p>C  Bad Romance</p>
      </div>
      <div id="shakira">
      <h5>What was Shakira's first album in English?</h5>

      <p>A  Laundry Service</p>
      <p>B  Oral Fixation Vol. 2</p>
      <p>C  Pies Descalzos</p>
      </div>
      <div id="artics">
      <h5>What is the name of Arctic Monkeys' debut album released in 2006?</h5>
    
      <p>A  Favourite Worst Nightmare</p>
      <p>B  Humbug</p>
      <p>C  Whatever People Say I Am, That's What I'm Not</p>
      </div>
      <p>On your cell phone screen, select the correct answer.</p>
      </div>
      `;
    // socket.on("notificar-pantalla-instructions", (data) => {
    //   console.log("Usuario registrado:", data.name);
    //   navigateToMupi("/screenInstructions", { name: data.name });
    // });

}
