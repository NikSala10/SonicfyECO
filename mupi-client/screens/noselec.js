import { navigateToMupi, socket } from "../app.js";

export default function renderScreenNoSelectM() {
    const app = document.getElementById("app");
    app.innerHTML = `
          <div id="noselectartista">
          <h1>Time's Up!</h1>
          <div id="icon-sad">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                </svg>
            </div>
            <h4>You Didn't Select An<br>Answer In Time.</h4>
            <p>But no worries — you'll get<br>another chance soon.</p>
            <p>Respond quickly and confidently - you can do it!</p>
        </div>
        `;
   
  }