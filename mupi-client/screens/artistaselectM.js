import { navigateToMupi } from "../app.js";

export default function renderScreenArtistaSelectM({ selectedArtist }) {
  const app = document.getElementById("app");

  if (!selectedArtist) {
    app.innerHTML = `<p>Error: No artist selected.</p>`;
    return;
  }

  localStorage.setItem("imgArtist", selectedArtist.img);

  app.innerHTML = `
    <div id="select-artista2">
      <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FGroup%20237%20(1).png?alt=media&token=cff7e3d9-5e3a-43bc-b3f1-8ff07cbeb305" alt="" style="width: 27%;">
      <h1>Artist selected</h1>
      <p>The artist you selected is:</p>
      <img id="fn-card" src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FGroup%20238.png?alt=media&token=c1a5f9e0-96cd-44ba-bea2-04ceb53c39bf" alt="" style="width: 27%;">
      <div id="artist-selected-card">
        <img src="${selectedArtist.img}" alt="${selectedArtist.name}" style="width: 60%" />
        <h3>${selectedArtist.name}</h3>
      </div>
      <img id="fond-cad2" src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2FGroup%20239.png?alt=media&token=4c10f882-5a95-4848-bbee-2dec742c8309" alt="" style="width: 27%;">
    </div>
  `;

  setTimeout(() => {
    navigateToMupi("/screenQuestion1M", { selectedArtist });
  }, 2000);
}
