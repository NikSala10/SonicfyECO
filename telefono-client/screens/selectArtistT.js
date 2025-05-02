import { makeRequest2, navigateToTelefono, socket } from "../app.js";

export default function renderScreenSelectArtistT(data) {
    const app = document.getElementById("app");
    app.innerHTML = `
    <div id="screenSelectArtistT">
        <svg width="193" height="50" viewBox="0 0 193 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.4999 0C10.9692 0 0 11.1751 0 24.96C0 38.7454 10.9692 49.9196 24.4999 49.9196C38.0319 49.9196 49 38.7454 49 24.96C49 11.176 38.0322 0 24.4999 0ZM35.7353 35.9994C35.2965 36.7327 34.3544 36.9652 33.6347 36.5151C27.8824 32.9354 20.641 32.1247 12.1129 34.1098C11.2911 34.3005 10.4719 33.7759 10.2847 32.9384C10.0965 32.1008 10.6094 31.2663 11.4332 31.0755C20.7659 28.9033 28.7712 29.8386 35.2292 33.8594C35.9489 34.3095 36.1771 35.2662 35.7353 35.9994ZM38.7341 29.2031C38.1811 30.1188 37.005 30.4079 36.1069 29.8445C29.5214 25.7206 19.4827 24.5263 11.6933 26.9352C10.6831 27.2461 9.61616 26.6661 9.30955 25.6386C9.00529 24.6095 9.57491 23.5245 10.5834 23.2116C19.481 20.4611 30.5424 21.7934 38.1051 26.5281C39.0032 27.0914 39.287 28.2893 38.7341 29.2031ZM38.9915 22.126C31.0953 17.3479 18.0676 16.9085 10.5287 19.2396C9.31804 19.6137 8.03779 18.9174 7.67092 17.6841C7.30405 16.4501 7.98689 15.1467 9.19838 14.7718C17.8526 12.0952 32.2392 12.6123 41.3302 18.1106C42.4215 18.769 42.7784 20.2018 42.1319 21.3097C41.4882 22.419 40.0769 22.7847 38.9915 22.126Z" fill="white"/>
        </svg>
        <div>
            <h3>Select the Artist!</h3>
            <p>You want to compete for to win a ticket.</p>
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

                const selectedDiv = document.getElementById("screenSelectArtistT");
                selectedDiv.innerHTML = `
                <div>
                    <h1>Selected artist</h1>
                    <p>The artist you selected is:</p>
                    <img src="${artist.img}" alt="${artist.name}">
                    <p>${artist.name}</p>
                </div>
                `;

                setTimeout(() => {
                navigateToTelefono("/screenQuestion1T", { selectedArtist: artist});
                }, 2500);
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
