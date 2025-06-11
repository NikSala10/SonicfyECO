import { makeRequest, navigateToMupi, socket } from "../app.js";

export default function renderScreenFan1M() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div id="select-artista">
            <h1>Prove that <br>you're the fan!</h1>
            <img id="fan1"src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Captura%20de%20pantalla%202025-06-07%20123211.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI1LTA2LTA3IDEyMzIxMS5wbmciLCJpYXQiOjE3NDkzMTc4MTgsImV4cCI6MTc4MDg1MzgxOH0.-4Sl-YNW_2FHTc8a7M3zyZOom5fPUSOc_vw-LRpgr6g" alt="">
            <h2 id="timer">6</h2>
            <img id="strellamorada2"src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/morado.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvbW9yYWRvLnBuZyIsImlhdCI6MTc0OTU5NDA5OSwiZXhwIjoxNzgxMTMwMDk5fQ.kMi3L7l7zL41q2mvyuzHUSh3SFllv3HdD6KgYeyCvk4" alt="">
            <img id="chico" src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FHimbre%20fan.png?alt=media&token=5d6dff78-2da5-4597-acf3-0c19c84fbbcc">
            <p>Pick your favorite artist!</p>
            <p>If you get them right... the ticket could be yours!</p>
          
            <img id="targeta" src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Captura%20de%20pantalla%202025-06-07%20125749.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvQ2FwdHVyYSBkZSBwYW50YWxsYSAyMDI1LTA2LTA3IDEyNTc0OS5wbmciLCJpYXQiOjE3NDkzMTkxMDksImV4cCI6MTc4MDg1NTEwOX0.MhjlNhcjCCtHnBZZVpZpjdxl__d8x1WRhpGdLOI1n_U" alt="">

            <img id="morado" src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Star%20morada.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvU3RhciBtb3JhZGEucG5nIiwiaWF0IjoxNzQ5MzE3NzgzLCJleHAiOjE3ODA4NTM3ODN9.UEM3bVoRrI27uzplQs5LlvVl5oVd83y7Iobr7Gt9lXY" alt="">
            <img id="amarillo"src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Star%20amarilla.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvU3RhciBhbWFyaWxsYS5wbmciLCJpYXQiOjE3NDkzMTc2MDgsImV4cCI6MTc4MDg1MzYwOH0.BYiiEttX2g3q7ySTYbtLbH8DU1_by2xcViUJROu-hck" alt="">
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