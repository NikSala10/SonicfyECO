export default function renderScreenQuestion1M() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div id="screen2">
          <h2>Challenge 2</h2>
          Your time for this 6 seconds to respond if you do not respond in the given time you will lose
          <div id="sabrina-2">
          <h5>Which of these songs is NOT on the album "Emails I Can't Send"?</h5>
      
          <p>A 2014</p>
          <p>B 2015</p>
          <p>C 2016</p>
      </div>

      </div>
        `;
      // socket.on("notificar-pantalla-instructions", (data) => {
      //   console.log("Usuario registrado:", data.name);
      //   navigateToMupi("/screenInstructions", { name: data.name });
      // });
  
  }
  