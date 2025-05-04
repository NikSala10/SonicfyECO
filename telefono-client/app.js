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
      renderScreenStart(currentRoute?.data);
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
      
    default:
      const app = document.getElementById("app");
      app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  }
}

async function makeRequest2(url, method, body) {
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

function navigateToTelefono(path, data) {
  route = { path, data };
  renderRoute(route);
}

async function fetchArtistQuestion(selectedArtistData, questionIndex = 0) {
  if (!selectedArtistData?.selectedArtist?.name) {
    throw new Error("No se ha seleccionado un artista válido.");
  }

  const response = await makeRequest2("/questions", "GET");

  if (!Array.isArray(response)) {
    throw new Error("Error al obtener preguntas del servidor.");
  }

  const artistName = selectedArtistData.selectedArtist.name;
  const artistData = response.find(
    (artist) => artist.artist.toLowerCase() === artistName.toLowerCase()
  );

  if (!artistData?.questions?.length) {
    throw new Error("No hay preguntas disponibles para el artista seleccionado.");
  }

  return {
    question: artistData.questions[questionIndex],
    artistName,
  };
}
export { navigateToTelefono, socket, makeRequest2, fetchArtistQuestion};
