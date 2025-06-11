import { navigateToTelefono } from "../app.js";

export default function renderScreenLevelsQuestionsT(data) {
  const app = document.getElementById("app");
  const selectedArtist = data.selectedArtistData;
  const actualArtist = selectedArtist?.selectedArtist?.selectedArtist?.selectedArtist;

  const questionNumber = data.questionNumber 
  let porcentaje;

  switch (questionNumber) {
    case 0:
      porcentaje = 15;
      break;
    case 1:
      porcentaje = 25;
      break;
    case 2:
      porcentaje =60 ;
      break;
  }

  let emojiSVG = "";

  switch (questionNumber) {
    case 0:
      emojiSVG = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 93.75C25.8375 93.75 6.25 74.1625 6.25 50C6.25 25.8375 25.8375 6.25 50 6.25C74.1625 6.25 93.75 25.8375 93.75 50C93.75 74.1625 74.1625 93.75 50 93.75ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M26.78 59.795C28.2739 58.9308 30.1855 59.4413 31.0497 60.9352C34.8368 67.4818 41.9073 71.875 50.0002 71.875C58.0931 71.875 65.1636 67.4818 68.9506 60.9352C69.8148 59.4413 71.7264 58.9308 73.2204 59.795C74.7143 60.6592 75.2248 62.5708 74.3606 64.0648C69.5024 72.4632 60.4143 78.125 50.0002 78.125C39.586 78.125 30.4979 72.4632 25.6397 64.0648C24.7755 62.5708 25.286 60.6592 26.78 59.795Z" fill="white"/>
        <path d="M43.75 40.625C43.75 45.8027 40.9518 50 37.5 50C34.0482 50 31.25 45.8027 31.25 40.625C31.25 35.4473 34.0482 31.25 37.5 31.25C40.9518 31.25 43.75 35.4473 43.75 40.625Z" fill="white"/>
        <path d="M54.7304 37.8944C56.2385 37.0551 58.1414 37.5973 58.9806 39.1054C60.0321 40.9948 61.945 42.1875 64.0625 42.1875C66.18 42.1875 68.0929 40.9948 69.1444 39.1054C69.9836 37.5973 71.8865 37.0551 73.3946 37.8944C74.9027 38.7336 75.4449 40.6365 74.6056 42.1446C72.5382 45.8596 68.6217 48.4375 64.0625 48.4375C59.5033 48.4375 55.5868 45.8596 53.5194 42.1446C52.6801 40.6365 53.2223 38.7336 54.7304 37.8944Z" fill="white"/>
        </svg>`;
      break;
    case 1:
      emojiSVG = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 93.75C25.8375 93.75 6.25 74.1625 6.25 50C6.25 25.8375 25.8375 6.25 50 6.25C74.1625 6.25 93.75 25.8375 93.75 50C93.75 74.1625 74.1625 93.75 50 93.75ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M70.7162 62.5841C71.9303 62.2968 73.199 62.7592 73.9435 63.7603C74.6881 64.7616 74.7657 66.1098 74.1409 67.1899C69.2827 75.5883 60.1946 81.2501 49.7805 81.2501C39.3663 81.2501 30.2782 75.5883 25.42 67.1899C24.7952 66.1098 24.8728 64.7616 25.6174 63.7603C26.3619 62.7592 27.6306 62.2968 28.8447 62.5841L28.8762 62.5915L28.981 62.616L29.3987 62.7116C29.7653 62.7946 30.3017 62.9139 30.9731 63.0576C32.3171 63.3451 34.1963 63.7286 36.3329 64.1117C40.6599 64.8876 45.8451 65.6251 49.7805 65.6251C53.7158 65.6251 58.901 64.8876 63.228 64.1117C65.3646 63.7286 67.2438 63.3451 68.5878 63.0576C69.2592 62.9139 69.7956 62.7946 70.1622 62.7116L70.5799 62.616L70.6848 62.5915L70.7162 62.5841Z" fill="white"/>
        <path d="M29.7231 28.5406C34.4919 19.6392 54.8448 27.7868 35.6743 50C7.57701 40.0241 20.9868 23.1356 29.7231 28.5406Z" fill="white"/>
        <path d="M70.2769 28.5406C79.0132 23.1356 92.423 40.0241 64.3257 50C45.1552 27.7868 65.5081 19.6392 70.2769 28.5406Z" fill="white"/>
        </svg>`;
      break;
    case 2:
      emojiSVG = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 93.75C25.8375 93.75 6.25 74.1625 6.25 50C6.25 25.8375 25.8375 6.25 50 6.25C74.1625 6.25 93.75 25.8375 93.75 50C93.75 74.1625 74.1625 93.75 50 93.75ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M26.78 59.795C28.2739 58.9308 30.1855 59.4413 31.0497 60.9352C34.8368 67.4818 41.9073 71.875 50.0002 71.875C58.0931 71.875 65.1636 67.4818 68.9506 60.9352C69.8148 59.4413 71.7264 58.9308 73.2204 59.795C74.7143 60.6592 75.2248 62.5708 74.3606 64.0648C69.5024 72.4632 60.4143 78.125 50.0002 78.125C39.586 78.125 30.4979 72.4632 25.6397 64.0648C24.7755 62.5708 25.286 60.6592 26.78 59.795Z" fill="white"/>
        <path d="M43.75 40.625C43.75 45.8027 40.9518 50 37.5 50C34.0482 50 31.25 45.8027 31.25 40.625C31.25 35.4473 34.0482 31.25 37.5 31.25C40.9518 31.25 43.75 35.4473 43.75 40.625Z" fill="white"/>
        <path d="M54.7304 37.8944C56.2385 37.0551 58.1414 37.5973 58.9806 39.1054C60.0321 40.9948 61.945 42.1875 64.0625 42.1875C66.18 42.1875 68.0929 40.9948 69.1444 39.1054C69.9836 37.5973 71.8865 37.0551 73.3946 37.8944C74.9027 38.7336 75.4449 40.6365 74.6056 42.1446C72.5382 45.8596 68.6217 48.4375 64.0625 48.4375C59.5033 48.4375 55.5868 45.8596 53.5194 42.1446C52.6801 40.6365 53.2223 38.7336 54.7304 37.8944Z" fill="white"/>
        </svg>`;
      break;
  }

  let mainTitle = "You've gained";
  let scoreText = `${porcentaje}% of your score`;
  let detailText = `Correct!`;

  if (questionNumber === 2) {
    mainTitle = "Amazing!";
    scoreText = `You've achieved ${porcentaje}%`;
    detailText = "In the singing challenge. Cumulative total: 100%";
  }

  app.innerHTML = `
        <div id="screenLevelsT">
        <img id="audifonos2" src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Group%20220.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvR3JvdXAgMjIwLnBuZyIsImlhdCI6MTc0OTI0NTI0MywiZXhwIjoxNzgwNzgxMjQzfQ.aW9c6qrYKn2BH5R_GpzgPIaUkmSpiWvsypUo0TAzyUU" alt="">
        
            <h1>${mainTitle}</h1>
            <p>${scoreText}</p>
            ${emojiSVG}
            <p>${detailText}</p>
            <img id="mancha2" src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Vector.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvVmVjdG9yLnBuZyIsImlhdCI6MTc0OTI0NjQ4NCwiZXhwIjoxNzgwNzgyNDg0fQ.MJp16l-wJR8y8IXYBGEAJZfFvNDr5yg0hFsmq1acSGE" alt="">
        </div>
        `;
        switch (questionNumber) {
          case 0:
            setTimeout(async () => {
              navigateToTelefono("/screenQuestion2T", {selectedArtist});
            }, 4000);
          break;
          case 1:
            setTimeout(async () => {
              navigateToTelefono("/screenQuestion3T", {selectedArtist });
            }, 4000);
            break;
          case 2:
            setTimeout(async () => {
              navigateToTelefono("/screenResulT", {selectedArtist});
            }, 4000);
          break;
        }
        

}
