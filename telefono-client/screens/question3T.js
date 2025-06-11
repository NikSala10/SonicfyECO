import { makeRequest2, navigateToTelefono, socket } from "../app.js";

export default function renderScreenQuestion3T({selectedArtist}) {
  console.log("Renderizando pantalla de pregunta 3 con el artista:", selectedArtist);
  
  const app = document.getElementById("app");

  let timeout;
  let clicked = false;

  if (!selectedArtist || !selectedArtist.name) {
    app.innerHTML = `<p>Error: No se encontró el artista seleccionado.</p>`;
    return;
  }

  app.innerHTML = `
        <div id="screenQuestion3T">
        <img id="microfonoarriba" src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Studio-Mic-Transparent-Images%201%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvU3R1ZGlvLU1pYy1UcmFuc3BhcmVudC1JbWFnZXMgMSAoMSkucG5nIiwiaWF0IjoxNzQ5NjIyOTk1LCJleHAiOjE3ODExNTg5OTV9.REUzMy8A_9-jjGeYwYJC9p_yl5yc6DO2IojEtzcv2rM" alt="">
        <img src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Get%20started.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvR2V0IHN0YXJ0ZWQucG5nIiwiaWF0IjoxNzQ5NTA0MTExLCJleHAiOjE3ODEwNDAxMTF9.ZHFEsbwEEi0K64BJdfRkNAI0Q7QCnjHZ1KsqAsOg71k" alt="">
            <h1>Get started<br>Sing</h1>
            <button id="active-microphone"> 
            <svg width="322" height="381" viewBox="0 0 322 381" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="216.125" height="328.668" rx="15" transform="matrix(0.974379 -0.224913 0.22924 0.97337 9.19507 55.8496)" fill="#F575C2"/>
            <rect width="205.067" height="323.084" rx="15" transform="matrix(0.999977 -0.00672764 0.00190964 0.999998 50.481 29.8967)" fill="#FC7556"/>
            <rect width="205.085" height="323.053" rx="15" transform="matrix(0.976919 -0.21361 0.217479 0.976065 18.0173 54.9919)" fill="#F0FC4C"/>
            <path d="M177.696 85.4536C204.397 82.1981 228.682 101.205 231.938 127.906L233.641 141.871C234.989 152.929 232.516 163.57 227.263 172.476C234.502 179.86 239.459 189.596 240.808 200.653L242.51 214.618C245.766 241.32 226.759 265.605 200.058 268.86C185.471 270.638 171.606 265.773 161.496 256.638C153.877 267.934 141.588 275.989 127.001 277.767C100.3 281.023 76.0149 262.016 72.7594 235.315L71.0567 221.35C69.7086 210.293 72.1806 199.651 77.4336 190.744C70.1947 183.36 65.238 173.625 63.8898 162.568L62.1871 148.603C58.9316 121.901 77.9384 97.6165 104.64 94.361C119.226 92.5826 133.091 97.4478 143.201 106.582C150.82 95.2863 163.11 87.2322 177.696 85.4536Z" fill="#FFF500"/>
            <path d="M140.475 24.337L157.359 84.817L170.984 24.4285L176.227 87.2148L200.981 32.0266L194.338 94.1834L229.065 46.7759L210.847 105.397L278.88 11.2734L224.98 120.331L274.391 94.6675L236.079 138.287L289.513 125.57L243.622 158.426L298.583 159.25L247.259 179.805L301.175 194.133L246.818 201.426L297.169 228.587L242.32 222.278L286.751 261.001L233.976 241.384L319.112 327.633L222.176 257.853L248.909 313.814L207.471 270.913L223.254 331.743L190.549 279.955L194.643 342.809L172.202 284.555L164.416 346.494L153.287 284.498L133.984 342.627L134.689 279.787L104.773 331.387L117.277 270.642L39.9462 361.67L101.865 257.492L55.3492 289.214L89.1746 240.95L37.4488 260.253L79.7987 221.79L25.2816 227.771L74.1757 200.908L19.4164 193.287L72.5685 179.281L20.1276 158.415L75.0523 157.92L27.3818 124.784L81.511 137.823L0.892334 41.3555L91.6426 119.931L59.8727 67.4045L104.973 105.079L83.59 46.3394L120.88 93.9629L110.883 31.7562L138.618 87.102L140.475 24.337Z" fill="#66C0FF"/>
            <path d="M121.406 168.384C123.805 168.384 125.75 170.329 125.75 172.728V181.416C125.75 200.607 141.308 216.166 160.5 216.166C179.692 216.166 195.25 200.607 195.25 181.416V172.728C195.25 170.329 197.195 168.384 199.594 168.384C201.993 168.384 203.938 170.329 203.938 172.728V181.416C203.938 203.939 186.794 222.459 164.844 224.639V242.228H190.906C193.305 242.228 195.25 244.173 195.25 246.572C195.25 248.971 193.305 250.916 190.906 250.916H130.094C127.695 250.916 125.75 248.971 125.75 246.572C125.75 244.173 127.695 242.228 130.094 242.228H156.156V224.639C134.206 222.459 117.062 203.939 117.062 181.416V172.728C117.062 170.329 119.007 168.384 121.406 168.384Z" fill="white"/>
            <path d="M177.875 181.416C177.875 191.011 170.096 198.791 160.5 198.791C150.904 198.791 143.125 191.011 143.125 181.416V137.978C143.125 128.382 150.904 120.603 160.5 120.603C170.096 120.603 177.875 128.382 177.875 137.978V181.416ZM160.5 111.916C146.106 111.916 134.438 123.584 134.438 137.978V181.416C134.438 195.809 146.106 207.478 160.5 207.478C174.894 207.478 186.562 195.809 186.562 181.416V137.978C186.562 123.584 174.894 111.916 160.5 111.916Z" fill="white"/>
            </svg>

            </button>
                      
            <svg id="getstarted" width="322" height="78" viewBox="0 0 322 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="161.035" cy="53.4727" r="24.5273" fill="#42C83C"/>
                <path d="M111.492 50.4258C111.492 50.1208 111.244 49.8735 110.939 49.8735C110.634 49.8735 110.387 50.1208 110.387 50.4258V59.2617C110.387 59.5667 110.634 59.814 110.939 59.814C111.244 59.814 111.492 59.5667 111.492 59.2617L111.492 50.4258Z" fill="white"/>
                <path d="M118.662 49.8839C118.163 49.8306 117.668 49.989 117.136 50.2384C116.607 50.4866 115.96 50.8671 115.142 51.3475L115.091 51.3772C114.273 51.8578 113.626 52.2382 113.15 52.5801C112.671 52.9243 112.292 53.28 112.09 53.7402C111.783 54.4429 111.783 55.2446 112.09 55.9473C112.292 56.4075 112.671 56.7632 113.15 57.1074C113.626 57.4493 114.273 57.8297 115.091 58.3103L115.142 58.34C115.96 58.8204 116.607 59.2009 117.136 59.4491C117.668 59.6985 118.163 59.8569 118.662 59.8036C119.421 59.7224 120.109 59.3173 120.554 58.6933C120.845 58.2857 120.957 57.7753 121.011 57.1835C121.064 56.5943 121.064 55.8343 121.064 54.8724V54.8151C121.064 53.8532 121.064 53.0932 121.011 52.504C120.957 51.9122 120.845 51.4018 120.554 50.9942C120.109 50.3702 119.421 49.9651 118.662 49.8839Z" fill="white"/>
                <path d="M211.02 50.4258C211.02 50.1208 210.768 49.8735 210.458 49.8735C210.148 49.8735 209.896 50.1208 209.896 50.4258V59.2617C209.896 59.5667 210.148 59.814 210.458 59.814C210.768 59.814 211.02 59.5667 211.02 59.2617V50.4258Z" fill="white"/>
                <path d="M206.183 51.3475C205.351 50.8671 204.692 50.4866 204.154 50.2384C203.614 49.989 203.109 49.8306 202.603 49.8839C201.83 49.9651 201.131 50.3702 200.678 50.9942C200.382 51.4018 200.267 51.9122 200.213 52.504C200.159 53.0932 200.159 53.8532 200.159 54.8151V54.8724C200.159 55.8343 200.159 56.5943 200.213 57.1835C200.267 57.7753 200.382 58.2857 200.678 58.6933C201.131 59.3173 201.83 59.7224 202.603 59.8036C203.109 59.8569 203.614 59.6985 204.154 59.4491C204.692 59.2009 205.351 58.8204 206.183 58.34L206.235 58.3103C207.067 57.8297 207.725 57.4493 208.209 57.1074C208.696 56.7632 209.082 56.4075 209.287 55.9473C209.6 55.2446 209.6 54.4429 209.287 53.7402C209.082 53.28 208.696 52.9243 208.209 52.5801C207.725 52.2382 207.067 51.8578 206.235 51.3772L206.183 51.3475Z" fill="white"/>
                <path d="M81.8182 48.3103C81.6174 48.1095 81.2918 48.1095 81.091 48.3103C80.8903 48.5111 80.8903 48.8366 81.091 49.0374L81.5844 49.5308L78.4301 49.5308C77.2604 49.5306 76.5466 49.5305 75.9518 49.7237C74.7518 50.1136 73.8109 51.0545 73.421 52.2545C73.2277 52.8493 73.2279 53.5631 73.228 54.7328V54.9547C73.2279 56.1244 73.2277 56.8382 73.421 57.433C73.5087 57.703 73.7988 57.8508 74.0689 57.7631C74.3389 57.6753 74.4867 57.3853 74.399 57.1152C74.2627 56.6958 74.2564 56.1598 74.2564 54.8438C74.2564 53.5277 74.2627 52.9917 74.399 52.5723C74.6872 51.6853 75.3826 50.9899 76.2696 50.7017C76.689 50.5654 77.225 50.5591 78.541 50.5591H81.4056L80.9541 50.9353C80.7359 51.1171 80.7064 51.4413 80.8882 51.6595C81.07 51.8776 81.3942 51.9071 81.6124 51.7253L82.5782 50.9205C82.8416 50.701 82.9861 50.393 83.0071 50.0794C83.0294 49.7486 82.9146 49.4066 82.6585 49.1505L81.8182 48.3103Z" fill="white"/>
                <path d="M85.0322 52.2545C84.9444 51.9845 84.6544 51.8367 84.3843 51.9244C84.1142 52.0122 83.9665 52.3022 84.0542 52.5723C84.1905 52.9917 84.1968 53.5277 84.1968 54.8438C84.1968 56.1598 84.1905 56.6958 84.0542 57.1152C83.766 58.0022 83.0706 58.6976 82.1836 58.9858C81.7642 59.1221 81.2281 59.1284 79.9121 59.1284H78.541C77.8779 59.1284 77.4129 59.1269 77.0608 59.1078L77.5335 58.6351C77.7343 58.4343 77.7343 58.1087 77.5335 57.9079C77.3327 57.7071 77.0072 57.7071 76.8064 57.9079L75.9661 58.7482C75.7822 58.9321 75.6704 59.1614 75.6309 59.3994C75.5642 59.8017 75.7045 60.2332 76.0464 60.5182L77.0122 61.323C77.2303 61.5048 77.5545 61.4753 77.7363 61.2571C77.9181 61.039 77.8886 60.7148 77.6705 60.533L77.2034 60.1438C77.5526 60.1569 77.9552 60.1568 78.4343 60.1567H80.0231C81.1928 60.1569 81.9066 60.157 82.5013 59.9638C83.7014 59.5739 84.6423 58.633 85.0322 57.433C85.2254 56.8382 85.2253 56.1244 85.2251 54.9547V54.7328C85.2253 53.5631 85.2254 52.8493 85.0322 52.2545Z" fill="white"/>
                <path d="M246.578 48.9958C246.377 48.795 246.052 48.795 245.851 48.9958C245.65 49.1966 245.65 49.5221 245.851 49.7229L246.347 50.2195C245.09 50.2701 243.928 50.9192 243.226 51.9716L239.777 57.1455C239.237 57.956 238.327 58.4429 237.353 58.4429H237.131C236.847 58.4429 236.617 58.6731 236.617 58.957C236.617 59.241 236.847 59.4712 237.131 59.4712H237.353C238.671 59.4712 239.902 58.8125 240.633 57.7159L244.082 52.542C244.554 51.8349 245.306 51.3742 246.137 51.2681L245.714 51.6209C245.496 51.8027 245.466 52.1269 245.648 52.345C245.83 52.5632 246.154 52.5926 246.372 52.4109L247.338 51.606C247.601 51.3865 247.746 51.0786 247.767 50.7649C247.789 50.4341 247.674 50.0922 247.418 49.8361L246.578 48.9958Z" fill="white"/>
                <path d="M237.131 50.2163C236.847 50.2163 236.617 50.4465 236.617 50.7305C236.617 51.0144 236.847 51.2446 237.131 51.2446H237.353C238.327 51.2446 239.237 51.7315 239.777 52.542C239.935 52.7783 240.254 52.8422 240.49 52.6846C240.727 52.5271 240.79 52.2079 240.633 51.9716C239.902 50.875 238.671 50.2163 237.353 50.2163H237.131Z" fill="white"/>
                <path d="M244.082 57.1455C243.925 56.9092 243.605 56.8453 243.369 57.0029C243.133 57.1604 243.069 57.4796 243.226 57.7159C243.897 58.7218 244.988 59.3593 246.181 59.4578L245.714 59.8474C245.496 60.0292 245.466 60.3534 245.648 60.5716C245.83 60.7897 246.154 60.8192 246.372 60.6374L247.338 59.8326C247.601 59.6131 247.746 59.3052 247.767 58.9915C247.789 58.6607 247.674 58.3187 247.418 58.0626L246.578 57.2224C246.377 57.0216 246.052 57.0216 245.851 57.2224C245.65 57.4232 245.65 57.7487 245.851 57.9495L246.339 58.4381C245.429 58.3859 244.591 57.9095 244.082 57.1455Z" fill="white"/>
                <line x1="1.5" y1="5.5" x2="320.5" y2="5.5" stroke="#7E7E7E" stroke-width="3" stroke-linecap="round"/>
                <line x1="1.5" y1="5.5" x2="158.5" y2="5.49999" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <ellipse cx="161" cy="6.5" rx="7" ry="6.5" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M150.572 41.842C150.611 41.5138 150.726 41.1993 150.908 40.9233C151.09 40.6474 151.334 40.4178 151.62 40.2526C151.907 40.0874 152.227 39.9913 152.557 39.9719C152.887 39.9525 153.217 40.0103 153.521 40.1408C155.056 40.797 158.496 42.3565 162.861 44.8758C167.227 47.3965 170.298 49.5977 171.633 50.5965C172.771 51.4507 172.774 53.1446 171.634 54.0017C170.313 54.9947 167.279 57.167 162.861 59.7195C158.438 62.272 155.038 63.8128 153.518 64.4603C152.208 65.0196 150.743 64.1712 150.572 62.7591C150.373 61.1085 150 57.3607 150 52.2991C150 47.2404 150.371 43.494 150.572 41.842Z" fill="white"/>
            </svg>
            <img id="mancharosa"src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Vector%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvVmVjdG9yICgyKS5wbmciLCJpYXQiOjE3NDk2MjI0NDIsImV4cCI6MTc4MTE1ODQ0Mn0.PYym18a6G3HyeMnXzBnRxaAUO3o00RbaFSOtDeQ4dcQ" alt="">
            <p id="recording-status" style="text-align:center; font-size: 1.2em; margin-top: 10px;"></p>
            <div id="verifying-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); color:white; font-size:1.5em; display:flex; align-items:center; justify-content:center; z-index:1000;">
                Estamos verificando tu grabación, por favor espera...
            </div>
            <div id="circulo3">
            <img id="circuloamarillo"src="https://ucqpslvexhojybodctlw.supabase.co/storage/v1/object/sign/resources/Change%20Circle%204%20Color%20Here%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80NmU3Y2Y1MS05MjQwLTQ2NjktOWRmMS1mZDFkMjg2MzU4YTgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNvdXJjZXMvQ2hhbmdlIENpcmNsZSA0IENvbG9yIEhlcmUgKDEpLnBuZyIsImlhdCI6MTc0OTYyMzM3NiwiZXhwIjoxNzgxMTU5Mzc2fQ.wEEcu5s28M1BA5kIRge9xsf_ei7ElIxF6Bua2_UJH3M" alt="">
            </div>
        </div>
        `;

        const statusText = document.getElementById("recording-status");
        const verifyingModal = document.getElementById("verifying-modal")
        verifyingModal.style.display = "none";

  timeout = setTimeout(() => {
    if (!clicked) {
      navigateToTelefono("/timeUp"); 
      makeRequest2("/active-microphone", "POST", { message: "Microfono no activado" });
    }
  }, 6000);

  document.getElementById("active-microphone").addEventListener("click", async () => {
    clicked = true;
    makeRequest2("/microInit", "POST", { message: "Microfono activado" });
    
    clearTimeout(timeout);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      const emailUser = localStorage.getItem("userEmail");
      const nameUser = localStorage.getItem("userName");
      const artist = localStorage.getItem("artistSelect");

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });

        const formData = new FormData();
        formData.append("audio", audioBlob, "grabacion.webm");
        formData.append("idArtist", selectedArtist.id); 
        formData.append("artist", artist); 
        formData.append("emailUser", emailUser); 
        formData.append("nameUser", nameUser); 
        
        console.log("⏺️ Audio Blob listo:", audioBlob);

        try {
          const response = await fetch("/api/upload-audio", {
            method: "POST",
            body: formData
          });

          if (response.ok) {
            const result = await response.json();
            console.log("✅ Audio enviado correctamente:", result);
          } else {
            const errorText = await response.text();
            console.error("❌ Error al enviar el audio:", response.status, errorText);
          }
        } catch (err) {
          console.error("❌ Error de red al enviar el audio:", err);
        }
      };

      mediaRecorder.start();
      console.log("🎙️ Grabando...");
      statusText.textContent = "🎙️ Grabando...";
      
      // Detener después de 19 segundos
      setTimeout(() => {
        mediaRecorder.stop();
        statusText.textContent = "✅ Grabación finalizada";
        console.log("🛑 Grabación detenida.");
      }, 19000);

       socket.on("verifying-user", () => {
        verifyingModal.style.display = "flex";
      });
      socket.on("result-canto", ({ porcentaje, esPerfecto }) => {
        console.log("Porcentaje recibido del socket:", { porcentaje, esPerfecto });
        verifyingModal.style.display = "none";
        clearTimeout(timeout); // cancela el timeout si llega un resultado
        navigateToTelefono(
          esPerfecto ? "/screenLevelsQuestionsT" : "/screenWasWrongT",
          { correct: esPerfecto, questionNumber: 2, selectedArtistData: selectedArtist }
        );
      });

    } catch (error) {
      console.error("❌ Error accediendo al micrófono:", error);
      alert("No se pudo acceder al micrófono.");
    }
  });
  
  }