import renderScreen1 from "./screens/welcome.js";
import renderScreenInstructions from "./screens/instructions.js";

const socket = io("/", { path: "/real-time" });

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };
renderRoute(route);

function renderRoute(currentRoute) {
switch (route.path) {
  case "/":
    clearScripts();
    renderScreen1(route.data);
    break;
  case "/screenInstructions":
    clearScripts();
    renderScreenInstructions(route.data);
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
