import renderScreenInstructions from "./screens/instructions.js";
import renderScreenQuestion1M from "./screens/question1M.js";
import renderScreenFan1M from "./screens/fan1M.js";
import renderScreenNoSelectM from "./screens/noselec.js";
import renderScreenQuestion2M from "./screens/question2M.js";
import renderScreenSingM from "./screens/singscreenM.js";
import renderScreenGameLevelsM from "./screens/gamelevelsM.js";
import renderScreenArtistaSelectM from "./screens/artistaselectM.js";
import renderScreenWasWrongM from "./screens/wasWrongM.js";
import renderScreenCongratulationsM from "./screens/CongratulationsM.js";
import renderscreenWelcome from "./screens/welcome.js";
import renderScreenLoserM from "./screens/loser.js";

const socket = io("/", { path: "/real-time" });

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };
renderRoute(route);

function renderRoute(currentRoute) {
switch (currentRoute.path) {
  case "/":
    clearScripts();
    renderscreenWelcome(currentRoute.data);
    break;
  case "/screenInstructions":
    clearScripts();
    renderScreenInstructions(currentRoute.data);
    break;
  case "/screenFan1M":
    clearScripts();
    renderScreenFan1M(currentRoute.data);
    break;
  case "/selectArtistM":
    clearScripts();
    renderScreenArtistaSelectM(currentRoute.data);
    break;
  case "/noSelectedM":
    clearScripts();
    renderScreenNoSelectM(currentRoute.data);
    break;
  case "/screenQuestion1M":
    clearScripts();
    renderScreenQuestion1M(currentRoute.data);
    break;
  case "/screenLevelsM":
    clearScripts();
    renderScreenGameLevelsM(currentRoute.data);
    break;
  case "/screenQuestion2M":
    clearScripts();
    renderScreenQuestion2M(currentRoute.data);
    break;
   case "/screenSingingM":
    clearScripts();
    renderScreenSingM(currentRoute.data);
    break;
    case "/screenWasWrongM":
      clearScripts();
      renderScreenWasWrongM(currentRoute.data);
      break;
    case "/screenLoserM":
      clearScripts(); 
      renderScreenLoserM(currentRoute.data);
      break;
    case "/screenCongrats":
      clearScripts();
      renderScreenCongratulationsM(currentRoute.data);
      break;
  default:
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
}
}

function navigateToMupi(path, data) {
  route = { path, data };
  renderRoute(route);
}

async function makeRequest(url, method, body) {
  const BASE_URL = "http://localhost:5058";
  let response = await fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  response = await response.json();

  return response;
}

async function getQuestionData(artistId, artistName, questionNumber) {
  const allQuestions =  await makeRequest("/questions", "GET");
  console.log("Datos recibidos desde /questions:", allQuestions);
  console.log("artistId:", artistId);

  const artistQuestions = allQuestions.filter(
    (q) =>
      q.idArtist &&
      q.idArtist.toString() === artistId.toString()
  );

  if (!artistQuestions || artistQuestions.length === 0) {
    throw new Error(`No se encontraron preguntas para el artista: ${artistName}`);
  }
  
  const questionData = artistQuestions.find(q => q.questionNumber === questionNumber);

  if (!questionData) {
    throw new Error(`No se encontró la pregunta número ${questionNumber} para ${artistName}`);
  }

  return {
    artistName: questionData.name,
    artistId: questionData.idArtist,
    question1: questionData.question,
    option1: questionData.option1,
    option2: questionData.option2,
    option3: questionData.option3,
    answer: questionData.respuestaCorrecta
  };
}
function startCountdown(duration, onTick, onEnd) {
  let timeLeft = duration;
  const intervalId = setInterval(() => {
    timeLeft--;
    onTick(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      onEnd();
    }
  }, 1000);

  return intervalId; 
}

export { navigateToMupi, socket, makeRequest, getQuestionData, startCountdown};
