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
    
        let artistSelectedReceived = false;

        socket.on("artist-Selected", (artist) => {
            artistSelectedReceived = true;
            if (artist) {
                clearInterval(interval);
                selectedArtistDiv.innerHTML = `
                <div>
                    <h1>Artist selected</h1>
                    <p>The artist you selected is:</p>
                    <img src="${artist.img}" alt="${artist.name}">
                    <p>${artist.name}</p>
                </div>
                `;
                setTimeout(() => {
                navigateToMupi("/screenQuestion1M", { selectedArtist: artist});
                }, 2000);

            }
        }) 

        const interval = setInterval(async () => {
            secondsRemaining--;
            timerElement.textContent = secondsRemaining;
            if (secondsRemaining <= 0) {
                clearInterval(interval);
                if (!artistSelectedReceived) { 
                    navigateToMupi("/noSelectedArtist"); 
                }
            }
        }, 1000);
  }