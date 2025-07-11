import { navigateToMupi } from "../app.js";

export default function renderScreenGameLevelsM(data) {
    const app = document.getElementById("app");

    const question = data.questionNumber
    const selectedArtist = data.selectedArtist;

    let porcentaje;

    switch (question) {
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

    const totalTests = 3;
    let starsHTML = "";
    for (let i = 0; i < totalTests; i++) {
        const filled = i <= question; 
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
        <div id="level-1">
        <img id="audifonos3" src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Group%20220.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvR3JvdXAgMjIwLnBuZyIsImlhdCI6MTc0OTI0NTI0MywiZXhwIjoxNzgwNzgxMjQzfQ.aW9c6qrYKn2BH5R_GpzgPIaUkmSpiWvsypUo0TAzyUU" alt="">

            <h1>Game levels</h1>
            <img src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Game%20levels%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvR2FtZSBsZXZlbHMgKDEpLnBuZyIsImlhdCI6MTc0OTUwOTExMSwiZXhwIjoxNzgxMDQ1MTExfQ.t38RImqbY7xpjySjjWCdnmmXvZ_xplbSQS49sQWqIsE" alt="">
            <p><p>Challenge ${question + 1}</p></p>
            <h4>Your percentage on this test is:</h4>
            <h4>${porcentaje}%</h4>
            <h5>Congratulations, you got the maximum percentage for this challenge which  </h5>
            <h4>was ${porcentaje}%!</h4>
            ${question === 2 ? `<p>With this result you have reached 100%, congratulations.</p>` : ""}
            <div id="stars">${starsHTML}</div>
            <img id="mancha3" src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Vector.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvVmVjdG9yLnBuZyIsImlhdCI6MTc0OTI0NjQ4NCwiZXhwIjoxNzgwNzgyNDg0fQ.MJp16l-wJR8y8IXYBGEAJZfFvNDr5yg0hFsmq1acSGE" alt="">

        </div>
        `;
        switch (question) {
            case 0:
                setTimeout(async () => {
                    navigateToMupi("/screenQuestion2M", {selectedArtist});
                  }, 4000);
            break;
            case 1:
                setTimeout(async () => {
                    navigateToMupi("/screenSingingM", {selectedArtist});
                  }, 4000);
            break;
            case 2:
                setTimeout(async () => {
                    navigateToMupi("/screenCongrats", {selectedArtist});
                  }, 4000);
            break;
        
            default:
                break;
        }
  
  }
  