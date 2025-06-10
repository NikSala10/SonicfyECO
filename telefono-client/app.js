import renderScreenSelectArtistT from "./screens/selectArtistT.js";
import renderScreenQuestion1T from "./screens/question1T.js";
import renderScreenRegister from "./screens/register.js";
import renderScreenStart from "./screens/start.js";
import renderScreenTimeUpT from "./screens/timeUpsT.js";
import renderScreenQuestion2T from "./screens/question2T .js";
import renderScreenLevelsQuestionsT from "./screens/levelsGameT.js";
import renderScreenWasWrongT from "./screens/wasWrong.js";
import renderScreenArtistT from "./screens/artistUserT.js";
import renderScreenQuestion3T from "./screens/question3T.js";
import renderScreenResulFinalT from "./screens/resultFinalT.js";
import renderScreenLoserT from "./screens/loserT.js";

const socket = io("/", { path: "/real-time" });

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };
renderRoute(route);

function renderRoute(currentRoute) {
  switch (currentRoute?.path) {
    case "/":
      clearScripts();
      renderScreenRegister(currentRoute?.data);
      break;
    case "/screenStart":
      clearScripts();
      renderScreenStart(currentRoute?.data);
      break;
    case "/screenSelectArtist":
      clearScripts();
      renderScreenSelectArtistT(currentRoute?.data);
      break;
    case "/screenSelectArtistByUser":
      clearScripts();
      renderScreenArtistT(currentRoute?.data);
      break;
    case "/timeUp":
      clearScripts();
      renderScreenTimeUpT(currentRoute?.data);
      break;
    case "/screenQuestion1T":
      clearScripts();
      renderScreenQuestion1T(currentRoute?.data);
      break;
    case "/screenQuestion2T":
      clearScripts();
      renderScreenQuestion2T(currentRoute?.data);
      break;
    case "/screenQuestion3T":
    clearScripts();
    renderScreenQuestion3T(currentRoute?.data);
    break;
    case "/screenLevelsQuestionsT":
      clearScripts();
      renderScreenLevelsQuestionsT(currentRoute?.data);
      break;
    case "/screenWasWrongT":
      clearScripts();
      renderScreenWasWrongT(currentRoute?.data);
    break;
    case "/screenResulT":
      clearScripts();
      renderScreenResulFinalT(currentRoute?.data);
      break;
    case "/screenLoserT":
      clearScripts();
      renderScreenLoserT(currentRoute?.data);
      break;
      
    default:
      const app = document.getElementById("app");
      app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  }
}

async function makeRequest2(url, method, body) {
  const BASE_URL = "http://localhost:5058";
   try {
    const res = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const json = await res.json();
      return json;
    } else {
      const text = await res.text();
      console.error("Respuesta no JSON recibida:", text);
      return { success: false, error: "Respuesta no válida", raw: text };
    }
  } catch (error) {
    console.error("Error en makeRequest2:", error);
    return { success: false, error: error.message };
  }
}

function navigateToTelefono(path, data) {
  route = { path, data };
  renderRoute(route);
}

async function fetchArtistQuestion(artistId, artistName, questionNumber) {

  const allQuestions =  await makeRequest2("/questions", "GET");

  const artistQuestions = allQuestions.filter(
    (q) => q.idArtist.toString() === artistId.toString()
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

async function fetchArtistQuestion2(artistId, artistName, questionNumber) {

  const allQuestions =  await makeRequest2("/questions", "GET");

  const artistQuestions = allQuestions.filter(
    (q) => q.idArtist.toString() === artistId.toString()
  );

  if (!artistQuestions || artistQuestions.length === 1) {
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


export { navigateToTelefono, socket, makeRequest2, fetchArtistQuestion, fetchArtistQuestion2};
