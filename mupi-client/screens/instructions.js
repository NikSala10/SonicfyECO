import {navigateToMupi, socket } from "../app.js";

export default function renderScreenInstructions() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div id="screenInstructions">
        <img src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Instrucciones.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvSW5zdHJ1Y2Npb25lcy5wbmciLCJpYXQiOjE3NDkzMjAxMzEsImV4cCI6MTc4MDg1NjEzMX0.llDysupiqZ9XtkMDd25aMQIJ-LWkER2Zxbor63Pk4oY" alt="">
      </div>
      `;

  socket.on("game-status", ({ gameStarted}) => {
    if (gameStarted) {
      navigateToMupi("/screenFan1M", { name: "Usuario" });
    } else {
      navigateToMupi("/noSelectedM");
    }
  });
  
}
