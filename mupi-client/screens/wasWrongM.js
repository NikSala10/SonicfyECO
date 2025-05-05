import { makeRequest, navigateToMupi, socket} from "../app.js";

export default function renderScreenWasWrongM(data) {
  const app = document.getElementById("app");
  
  const question = data.questionNumber
  let porcentaje;

  switch (question) {
    case 0:
      porcentaje = 15;
      break;
    case 1:
      porcentaje = 25;
      break;
    case 2:
      porcentaje = 60;
      break;
  }

  const totalTests = 3;
  let starsHTML = "";
  for (let i = 0; i < totalTests; i++) {
      const filled = i < question;  
      starsHTML += `
      <div class="test-star">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi ${filled ? "bi-star-fill" : "bi-star"}" viewBox="0 0 16 16">
          <path d="${filled 
              ? "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              : "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
          }"/>
          </svg>
          <h6>Test ${i + 1}</h6>
      </div>
      `;
    }
  app.innerHTML = `
        <div id="screenWasWrongT">
        <img src="https://cbnylposiazbgqyzeifz.supabase.co/storage/v1/object/sign/img/Time's%20up!.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzZmMzU0ZTcyLTRmYWQtNGU1NS04ZDYyLWVmZDYwYThhMzUzMyJ9.eyJ1cmwiOiJpbWcvVGltZSdzIHVwIS5wbmciLCJpYXQiOjE3NDY0MDU0MDcsImV4cCI6MTkwNDA4NTQwN30.O2rYr_rf9lFIUcbEwam0cJ1R05u65VDGY2IFPrPMTYA" alt=""
        <img src="https://cbnylposiazbgqyzeifz.supabase.co/storage/v1/object/sign/img/Time's%20up!.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzZmMzU0ZTcyLTRmYWQtNGU1NS04ZDYyLWVmZDYwYThhMzUzMyJ9.eyJ1cmwiOiJpbWcvVGltZSdzIHVwIS5wbmciLCJpYXQiOjE3NDY0MDUyODQsImV4cCI6MTkwNDA4NTI4NH0.Ag99DGe5ylD3OElVXl63jwBkLqTMo4Il4imr9TjTLz0" alt="">

            <h1>Game levels</h1>
            <img src="https://cbnylposiazbgqyzeifz.supabase.co/storage/v1/object/sign/img/Time's%20up!.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzZmMzU0ZTcyLTRmYWQtNGU1NS04ZDYyLWVmZDYwYThhMzUzMyJ9.eyJ1cmwiOiJpbWcvVGltZSdzIHVwIS5wbmciLCJpYXQiOjE3NDY0MDUxNTYsImV4cCI6MjA5MzMwMTE1Nn0.vMzJLAOWvh47VC_ZrWtDsWpYKkvln1acw0JR8p7pz7g" alt="">
            <p><p>Challenge ${question + 1}</p></p>
            <h4>Your percentage on this test is:</h4>
            <h4>0%</h4>
            <p>Sorry, you have not achieved the maximum percentage for this challenge that</p>
            <h4>was ${porcentaje}%</h4>
            <div id="stars">${starsHTML}</div>
        </div>
        `;
        

        socket.on("game-reset", () => {
          navigateToMupi("/"); 
        });

}
