import renderScreenSelectArtistT from "./screens/selectArtistT.js";
import renderScreenQuestion1T from "./screens/question1T.js";
import renderScreenRegister from "./screens/register.js";
import renderScreenStart from "./screens/start.js";
import renderScreenTimeUpT from "./screens/timeUpsT.js";

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
    case "/timeUp":
      clearScripts();
      renderScreenTimeUpT(currentRoute?.data);
      break;
    case "/screenQuestion1T":
      clearScripts();
      renderScreenQuestion1T(currentRoute?.data);
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

export { navigateToTelefono, socket, makeRequest2};
