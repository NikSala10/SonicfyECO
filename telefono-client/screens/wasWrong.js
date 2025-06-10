import { makeRequest2, navigateToTelefono } from "../app.js";

export default function renderScreenWasWrongT(data) {
  const app = document.getElementById("app");

  const questionNumber = data.questionNumber 
  
  app.innerHTML = `
    <div id="screenWasWrongT">
        <h1>You have lost</h1>
        <p>0% of the score</p>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 93.75C25.8375 93.75 6.25 74.1625 6.25 50C6.25 25.8375 25.8375 6.25 50 6.25C74.1625 6.25 93.75 25.8375 93.75 50C93.75 74.1625 74.1625 93.75 50 93.75ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M26.78 77.705C28.2739 78.5692 30.1855 78.0587 31.0497 76.5648C34.8368 70.0182 41.9073 65.625 50.0002 65.625C58.0931 65.625 65.1636 70.0182 68.9506 76.5648C69.8148 78.0587 71.7264 78.5692 73.2204 77.705C74.7143 76.8408 75.2248 74.9292 74.3606 73.4352C69.5024 65.0368 60.4143 59.375 50.0002 59.375C39.586 59.375 30.4979 65.0368 25.6397 73.4352C24.7755 74.9292 25.286 76.8408 26.78 77.705Z" fill="white"/>
        <path d="M43.75 40.625C43.75 45.8027 40.9518 50 37.5 50C34.0482 50 31.25 45.8027 31.25 40.625C31.25 35.4473 34.0482 31.25 37.5 31.25C40.9518 31.25 43.75 35.4473 43.75 40.625Z" fill="white"/>
        <path d="M68.75 40.625C68.75 45.8027 65.9518 50 62.5 50C59.0482 50 56.25 45.8027 56.25 40.625C56.25 35.4473 59.0482 31.25 62.5 31.25C65.9518 31.25 68.75 35.4473 68.75 40.625Z" fill="white"/>
        </svg>
        <p>Incorrect!</p>
        <p>The game will restart automatically  </p>
    </div>
    `;

    if (questionNumber == 2) {
      setTimeout(async () => {
          navigateToTelefono("/screenLoserT");
        }, 4000);
    }else {

    setTimeout(async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (userId) {
          await makeRequest2(`/deactivate-user/${userId}`, "POST");
          localStorage.removeItem("userId");
        }
        await makeRequest2("/reset-game", "POST");
        navigateToTelefono("/");
      } catch (error) {
        console.error("Error al resetear el juego:", error);
      }
    }, 4000);
}
}
