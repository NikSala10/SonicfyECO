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
      <div id="lady">
      <h5>What is the name of the Lady Gaga song that won the Oscar for Best Original Song?</h5>
    
      <p>A  Always Remember Us This Way</p>
      <p>B  Til It Happens to You</p>
      <p>C  Shallow</p>
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
      </div>`;
      // socket.on("notificar-pantalla-instructions", (data) => {
      //   console.log("Usuario registrado:", data.name);
      //   navigateToMupi("/screenInstructions", { name: data.name });
      // });
  
  }
  