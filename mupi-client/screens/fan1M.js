import { makeRequest, navigateToMupi, socket } from "../app.js";

export default function renderScreenFan1M() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div id="select-artista">
            <h1>Prove that you're the fan!</h1>
            <p>Pick your favorite artist!</p>
            <h2 id="timer">6</h2>
            <p>If you get them right... the ticket could be yours!</p>
            <p>Ready for the challenge?</p>
            <p>Good luck!</p>            
        </div>
        `;

        let secondsRemaining = 6;
        const timerElement = document.getElementById("timer");
        const selectedArtistDiv = document.getElementById("select-artista");
    
        const interval = setInterval(async () => {
            secondsRemaining--;
            timerElement.textContent = secondsRemaining;
            try {
                const response = await makeRequest("/check-select-artist", "GET");
                
                if (response.artistSelected) {
                    clearInterval(interval);
                    selectedArtistDiv.innerHTML = `
                    <div>
                        <h1>Artist selected</h1>
                        <p>The artist you selected is:</p>
                        <p>${response.artistSelected}</p>
                    </div>
                    `;
                    setTimeout(() => {
                    navigateToMupi("/screenQuestion1M", { selectedArtist: response.artistSelected });
                    }, 2000);
                   
                    return;
                    
                }
            } catch (error) {
                console.error("Error checking artist:", error);
            }

            if (secondsRemaining <= 0) {
                clearInterval(interval);
                navigateToMupi("/noSelectedArtist")
            }
        }, 1000);
  }