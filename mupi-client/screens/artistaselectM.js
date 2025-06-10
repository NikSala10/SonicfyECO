import { navigateToMupi } from "../app.js";

export default function renderScreenArtistaSelectM({ selectedArtist }) {
  const app = document.getElementById("app");

  if (!selectedArtist) {
    app.innerHTML = `<p>Error: No artist selected.</p>`;
    return;
  }

  localStorage.setItem("imgArtist", selectedArtist.img);

  app.innerHTML = `
    <div id="select-artista">
      <h1>Artist selected</h1>
      <p>The artist you selected is:</p>
      <div id="artist-selected-card">
        <img src="${selectedArtist.img}" alt="${selectedArtist.name}" />
        <h3>${selectedArtist.name}</h3>
      </div>
    </div>
  `;

  setTimeout(() => {
    navigateToMupi("/screenQuestion1M", { selectedArtist });
  }, 2000);
}
