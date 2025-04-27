import renderScreen1 from "./screens/welcome.js";
import renderScreenInstructions from "./screens/instructions.js";
import renderScreenQuestion1M from "./screens/question1M.js";
import renderScreenFan1M from "./screens/fan1M.js";
import renderScreenNoSelectM from "./screens/noselec.js";
import renderScreenQuestion2M from "./screens/question2M.js";
import renderScreenNoSingM from "./screens/singscreenM.js";

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
    renderScreen1(currentRoute.data);
    break;
  case "/screenInstructions":
    clearScripts();
    renderScreenInstructions(currentRoute.data);
    break;
  case "/screenFan1M":
    clearScripts();
    renderScreenFan1M(currentRoute.data);
    break;
  case "/noSelectedArtist":
    clearScripts();
    renderScreenNoSelectM(currentRoute.data);
    break;
  case "/screenQuestion1M":
    clearScripts();
    renderScreenQuestion1M(currentRoute.data);
    break;
  case "/screenQuestion2M":
    clearScripts();
    renderScreenQuestion2M(currentRoute.data);
    break;
   case "/screenSingingM":
    clearScripts();
    renderScreenNoSingM(currentRoute.data);
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

export { navigateToMupi, socket, makeRequest };
