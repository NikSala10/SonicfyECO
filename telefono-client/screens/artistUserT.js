import { navigateToTelefono } from "../app.js";

export default function renderScreenArtistT({ selectedArtist }) {
  const app = document.getElementById("app");

  if (!selectedArtist) {
    app.innerHTML = `<p>Error: No artist selected.</p>`;
    return;
  }

  app.innerHTML = `
    <div id="select-artistaT">
      <h1>Artist selected</h1>
      <p>The artist you selected is:</p>
      <div id="artist-selected-card">
        <img src="${selectedArtist.img}" alt="${selectedArtist.name}" />
        <h3>${selectedArtist.name}</h3>
      </div>
    </div>
  `;

  setTimeout(() => {
    navigateToTelefono("/screenQuestion1T", { selectedArtist});
  }, 2000);
}
