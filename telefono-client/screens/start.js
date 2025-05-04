import { makeRequest2, navigateToTelefono, socket } from "../app.js";


export default function renderScreenStart(data) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div id="screenStart">
    <img class="img2"src="https://cbnylposiazbgqyzeifz.supabase.co/storage/v1/object/sign/img/IMG-20241205-WA0010%204.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzZmMzU0ZTcyLTRmYWQtNGU1NS04ZDYyLWVmZDYwYThhMzUzMyJ9.eyJ1cmwiOiJpbWcvSU1HLTIwMjQxMjA1LVdBMDAxMCA0LnBuZyIsImlhdCI6MTc0NjM4NzYxMCwiZXhwIjoyMDkzMjgzNjEwfQ.CKCRQ54uns-7_CALuqZDpMKQdtojaIzQ6WcWW4kakjk" alt="">
    <div id="icon"><svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50" fill="none">
    <path d="M24.4999 0C10.9692 0 0 11.1751 0 24.96C0 38.7454 10.9692 49.9196 24.4999 49.9196C38.0319 49.9196 49 38.7454 49 24.96C49 11.176 38.0322 0 24.4999 0ZM35.7353 35.9994C35.2965 36.7327 34.3544 36.9652 33.6347 36.5151C27.8824 32.9354 20.641 32.1247 12.1129 34.1098C11.2911 34.3005 10.4719 33.7759 10.2847 32.9384C10.0965 32.1008 10.6094 31.2663 11.4332 31.0755C20.7659 28.9033 28.7712 29.8386 35.2292 33.8594C35.9489 34.3095 36.1771 35.2662 35.7353 35.9994ZM38.7341 29.2031C38.1811 30.1188 37.005 30.4079 36.1069 29.8445C29.5214 25.7206 19.4827 24.5263 11.6933 26.9352C10.6831 27.2461 9.61616 26.6661 9.30955 25.6386C9.00529 24.6095 9.5749 23.5245 10.5834 23.2116C19.481 20.4611 30.5424 21.7934 38.1051 26.5281C39.0032 27.0914 39.287 28.2893 38.7341 29.2031ZM38.9915 22.126C31.0953 17.3479 18.0676 16.9085 10.5287 19.2396C9.31804 19.6137 8.03779 18.9174 7.67092 17.6841C7.30405 16.4501 7.98689 15.1467 9.19838 14.7718C17.8526 12.0952 32.2392 12.6123 41.3302 18.1106C42.4215 18.769 42.7784 20.2018 42.1319 21.3097C41.4882 22.419 40.0769 22.7847 38.9915 22.126Z" fill="white"/>
    </svg> </div> 
        <h2>Welcome to the</h2>
        <img src="https://cbnylposiazbgqyzeifz.supabase.co/storage/v1/object/sign/img/Musical%20Challenge!.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzZmMzU0ZTcyLTRmYWQtNGU1NS04ZDYyLWVmZDYwYThhMzUzMyJ9.eyJ1cmwiOiJpbWcvTXVzaWNhbCBDaGFsbGVuZ2UhLnBuZyIsImlhdCI6MTc0NjM5MTM0NywiZXhwIjoyMDkzMjg3MzQ3fQ.oCJYzGdsc-5J1gilS6Tfnr52O1fBZysxx6F-QGfGlLM" alt="">
        <div id="texto">
          <p>You are about to experience <br> something unique!!1</p>
          <button id="start">Start</button>
          <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Fmicro-center.png?alt=media&token=fc646eab-f107-4b69-ba35-603303c84132">
          
          </div>
    </div>
    `;

    let secondsRemaining = 10;
    let buttonClicked = false;
  
    socket.on("game-status", ({ gameStarted }) => {
      if (gameStarted && !buttonClicked) {
        clearInterval(interval);
        navigateToTelefono("/screenSelectArtist", data);
      }
    });
  
    const interval = setInterval(async () => {
      if (secondsRemaining <= 0) {
        clearInterval(interval);
        if (!buttonClicked) {
          await makeRequest2("/update-game-status", "POST", {
            gameStarted: false,
          });
          navigateToTelefono("/timeUp", data);
        }
      } else {
        secondsRemaining--;
      }
    }, 1000);
  
    const start = document.getElementById("start");
    start.addEventListener("click", async () => {
      buttonClicked = true;
      await makeRequest2("/start-game", "POST", { message: "Juego iniciado desde TELÉFONO" });
      navigateToTelefono("/screenSelectArtist", data);
    });
}
