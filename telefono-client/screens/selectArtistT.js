import { makeRequest2, navigateToTelefono, socket } from "../app.js";

export default function renderScreenSelectArtistT(data) {
    const app = document.getElementById("app");
    app.innerHTML = `
    <div id="screenSelectArtistT">
    <img src="https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Flogo%20blanco.svg?alt=media&token=9ec390e9-766d-481f-85ee-2ed30a0e648f" alt="">
        <div id="information">
        <div class="info-text">
            <h3>Select the Artist!</h3>
            <p>You want to compete for to win a ticket.</p>
        </div>
            <img src="https://cbnylposiazbgqyzeifz.supabase.co/storage/v1/object/sign/img/Espresso%20png%201.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzZmMzU0ZTcyLTRmYWQtNGU1NS04ZDYyLWVmZDYwYThhMzUzMyJ9.eyJ1cmwiOiJpbWcvRXNwcmVzc28gcG5nIDEucG5nIiwiaWF0IjoxNzQ2Mzg1NzEyLCJleHAiOjIwOTMyODE3MTJ9.ghIrxc0NgyihDDX3fMChVG3Mi7mE011Cm7goUEscwko" alt="">
        </div>
        <div id="artists"></div>
    </div>
    `;

    const artistsContainer = document.getElementById("artists");
    let artistSelected = false;


    const TimeOutMs = 6000;
    const timeout = setTimeout(() => {
        if (!artistSelected) {
        navigateToTelefono("/timeUp", data);
        }
    }, TimeOutMs);

    async function getArtists() {
        try {
        const response = await makeRequest2("/artists", "GET");
        response.forEach((artist) => {
            const artistCard = document.createElement("div");
            artistCard.classList.add("artist-card");
            artistCard.innerHTML = `
            <img src="${artist.img}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            `;
            artistsContainer.appendChild(artistCard);

            artistCard.addEventListener("click", async () => {
            if (artistSelected) return;
            artistSelected = true;
            clearTimeout(timeout); 

            try {
                const body = {
                name: artist.name,
                img: artist.img,
                };

                await makeRequest2("/select-artist", "POST", body);
                navigateToTelefono("/screenSelectArtistByUser", { selectedArtist: artist});
            } catch (error) {
                console.error("Error selecting artist:", error);
            }
            });
        });
        } catch (error) {
        console.error("Error fetching artists:", error);
        }
    }

    getArtists();
}
