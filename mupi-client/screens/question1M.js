// import { socket, navigateToMupi} from "../app.js";

export default function renderScreenQuestion1M() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="screen1">
      <h1>Challenge 1</h1>
      <p><strong>Your time for this 6 seconds to respond if you do not respond in the given time you will lose</p>
      <div id="sabrina">
          <p>In what year did Sabrina Carpenter release her debut album "Eyes Wide Open"?</p>
      
          <h5>A<br>2014</h5>
          <h5>B<br>2015</h5>
          <h5>C<br>2016</h5>
      </div>
      <div id="lady">
      <p>What was Lady Gaga's first single to reach #1 on the Billboard Hot 100?</p>
    
      <h5>A <br> Poker Face</h5>
      <h5>B <br> Just Dance</h5>
      <h5>C <br> Bad Romance</h5>
      </div>
      <div id="shakira">
      <p>What was Shakira's first album in English?</p>

      <h5>A <br> Laundry Service</h5>
      <h5>B <br> Oral Fixation Vol. 2</h5>
      <h5>C <br> Pies Descalzos</h5>
      </div>
      <div id="artics">
      <p>What is the name of Arctic Monkeys' debut album released in 2006?</p>
    
      <h5>A <br> Favourite Worst Nightmare</h5>
      <h5>B <br> Humbug</h5>
      <h5>C <br> Whatever People Say I Am, That's What I'm Not</h5>
      </div>
      <p>On your cell phone screen, select the correct answer.</p>
      </div>
      `;
    // socket.on("notificar-pantalla-instructions", (data) => {
    //   console.log("Usuario registrado:", data.name);
    //   navigateToMupi("/screenInstructions", { name: data.name });
    // });

}
