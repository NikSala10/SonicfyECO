import { makeRequest, navigateToMupi, socket } from "../app.js";

export default function renderScreenFan1M() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div id="select-artista">
            <h1>Prove that you're the fan!</h1>
            <h2 id="timer">6</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FHimbre%20fan.png?alt=media&token=5d6dff78-2da5-4597-acf3-0c19c84fbbcc">
            <p>Pick your favorite artist!</p>
            <p>If you get them right... the ticket could be yours!</p>
            <p>Ready for the challenge?</p>
            <p>Good luck!</p>            
        </div>
        `;

        let secondsRemaining = 6;
        const timerElement = document.getElementById("timer");
        const selectedArtistDiv = document.getElementById("select-artista");
    
        let artistSelectedReceived = false;

        socket.on("artist-Selected", (artist) => {
            artistSelectedReceived = true;
            if (artist) {
              clearInterval(interval);
              navigateToMupi("/selectArtistM", { selectedArtist: artist }); 
            }
          });

        const interval = setInterval(async () => {
            secondsRemaining--;
            timerElement.textContent = secondsRemaining;
            if (secondsRemaining <= 0) {
                clearInterval(interval);
                if (!artistSelectedReceived) { 
                    navigateToMupi("/noSelectedM"); 
                }
            }
        }, 1000);
  }