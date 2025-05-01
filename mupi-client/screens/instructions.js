import { makeRequest, navigateToMupi, socket } from "../app.js";

export default function renderScreenInstructions() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div id="screenInstructions">
          <h2>¡Welcome to the </h2>
          <h1>Musical Challenge!</h1>
          <p>Test your knowledge and talent to win an exclusive ticket to your favorite artist's concert!</p>
          <div id="How to play">
            <h5>How to play?</h5>
            <p>#1 Choose your artist!</p>
            <p>Select one of the following artists to participate in their challenge:</p>
            <p> Sabrina Carpenter</p>
            <p>Arctic Monkeys</p>
            <p>Shakira</p>
            <p>Lady Gaga</p>
            <p>#2 Answer the questions</p>
            <p>You will be asked two questions about your chosen artist. Each question has a specific score:</p>
            <p>Question 1 (Medium Level): 15%</p>
            <p>Question 2 (High Level): 25%</p>
            <p>#3 Show off your talent in the singing challenge </p>
            <p>Sing a part of a song by your chosen artist and try to get the lyrics right.</p>
            <p> This challenge is worth 60% of the total score</p>
          </div>
          <p>To win the ticket, you must reach 100% of the points. If you succeed, you will receive all the details via the email you registered with!</p>
          <h3>This is your moment to shine! 
          Tap "Start" to begin the challenge</h3>
      </div>
      `;

  socket.on("game-status", ({ gameStarted}) => {
    if (gameStarted) {
      navigateToMupi("/screenFan1M", { name: "Usuario" });
    } else {
      navigateToMupi("/noSelectedArtist");
    }
  });
  
}
