import { navigateToMupi, socket } from "../app.js";

export default function renderScreenNoSelectM() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <div id="noselectartista">

            <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FGroup%20234.png?alt=media&token=af7c305d-c0da-40c1-a21f-f5b49b4eb471" alt="" style="width: 30%;">
            <h1>Time's Up!</h1>
            
            <div id="icon-sad">
            <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FGroup%20233.png?alt=media&token=4a3aeac6-a0fc-4c80-8894-a204618323ce" alt="" style="width: 35%;">
            </div>
            <div id="text-sad">
                  <h4>You Didn't Select An<br>Answer In Time.</h4>
                  <p>But no worries — you'll get<br>another chance soon.</p>
            </div>
            
            <p id="res-art">Respond quickly and confidently - you can do it!</p>
            <img id="final-se" src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FGroup%20235.png?alt=media&token=bb7ae388-33ac-4dd4-916b-f4efd6539990" alt="" style="width: 30%;">
      </div>
      `;

      socket.on("game-reset", () => {
            navigateToMupi("/"); 
          });
    

  }