// import { socket, navigateToMupi} from "../app.js";

export default function renderScreenQuestion1M() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="screen1">
      <h1>Challenge 1</h1>
      <p><strong>Your time for this 6 seconds</strong> to respond if you do not respond in the given time you will lose</p>
      <div id="sabrina">
          <p>In what year did Sabrina Carpenter release her debut album "Eyes Wide Open"?</p>
      
          <h5>A<br>2014</h5>
          <h5>B<br>2015</h5>
          <h5>C<br>2016</h5>
      </div>
      <div id="lady">
          <p>In what year did Sabrina Carpenter release her debut album "Eyes Wide Open"?</p>
      
          <h5>A<br>2014</h5>
          <h5>B<br>2015</h5>
          <h5>C<br>2016</h5>
      </div>

      <p>On your cell phone screen, select the correct answer.</p>
      </div>
      `;
    // socket.on("notificar-pantalla-instructions", (data) => {
    //   console.log("Usuario registrado:", data.name);
    //   navigateToMupi("/screenInstructions", { name: data.name });
    // });

}
