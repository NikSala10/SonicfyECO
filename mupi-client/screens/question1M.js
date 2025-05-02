import { makeRequest, socket } from "../app.js";

export default function renderScreenQuestion1M(selectedArtist) {
  const app = document.getElementById("app");

  async function getQuestion() {
    try {
    const response = await makeRequest("/questions", "GET");
    if (!selectedArtist || !selectedArtist.selectedArtist || !selectedArtist.selectedArtist.name) {
      console.error("selectedArtist o selectedArtist.name es undefined");
      return; 
    }

    const artistName = selectedArtist.selectedArtist.name;
    const artistData = response.find(artist => artist.artist.toLowerCase() === artistName.toLowerCase());
    if (artistData) {
      const question = artistData.questions[0];  
  
    app.innerHTML = `
      <div id="question1M">
        <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M88.0656 6.04447e-07C99.6359 -3.39096e-06 111.093 2.28014 121.781 6.71012C132.47 11.1401 142.181 17.633 150.359 25.8179C158.537 34.0027 165.022 43.7189 169.443 54.4112C173.864 65.1035 176.135 76.5623 176.125 88.1326C176.125 136.781 136.663 176.237 88.0431 176.209C76.4531 176.207 64.9775 173.918 54.2743 169.472C43.5711 165.026 33.8509 158.51 25.6713 150.299C17.4916 142.088 11.0134 132.343 6.60828 121.623C2.20312 110.903 -0.0423699 99.4184 0.000605384 87.8286C0.0737865 39.3095 39.5184 -0.00562871 88.0656 6.04447e-07ZM75.2983 46.6164C61.073 46.5882 47.0335 47.9899 33.3543 52.0712C28.5975 53.4897 26.2501 57.8919 27.573 62.3841C28.8959 66.8763 33.3374 69.1674 38.0942 67.8107C44.4841 65.9466 51.0356 64.6894 57.6617 64.056C86.4613 61.4496 114.383 63.9715 140.328 78.1293C141.265 78.67 142.301 79.018 143.374 79.1529C144.447 79.2878 145.537 79.2068 146.578 78.9147C147.62 78.6226 148.592 78.1252 149.439 77.4519C150.285 76.7786 150.989 75.9428 151.508 74.9937C153.726 71.0138 152.409 66.2514 148.35 63.797C145.055 61.8142 141.628 60.0594 138.093 58.5449C118.047 49.9489 96.9656 46.7458 75.2983 46.6164ZM140.171 99.5319C140.171 96.8017 139.112 94.8314 136.23 93.2158C105.196 75.8775 72.4837 72.8096 38.37 81.8221C37.3663 82.0757 36.4355 82.5595 35.6511 83.235C34.4512 84.2318 33.6292 85.6097 33.3219 87.139C33.0146 88.6683 33.2406 90.2567 33.9623 91.6396C35.5722 94.7245 38.7866 95.9798 42.637 94.8821C61.3432 89.5511 80.1789 89.4667 99.0991 93.486C109.795 95.7378 119.973 99.4475 129.413 105.082C134.412 108.077 140.131 105.066 140.171 99.5432V99.5319ZM72.8439 105.724C63.4768 105.578 52.8374 107.16 42.2711 109.394C40.0644 109.862 38.1392 110.706 37.2498 112.969C36.8479 113.877 36.7138 114.881 36.8634 115.862C37.013 116.843 37.44 117.762 38.0942 118.508C39.783 120.552 41.9728 120.76 44.4722 120.197C61.2813 116.471 78.1693 115.131 95.1923 118.756C104.013 120.596 112.469 123.878 120.22 128.472C124.161 130.814 128.169 129.322 129.12 125.303C129.717 122.781 128.501 120.602 125.388 118.773C109.62 109.524 92.4846 105.583 72.8439 105.713V105.724Z" fill="#F6F6F6"/>
        </svg>
        <h1>Challenge 1</h1>
        <p><strong>Your time for this 6 seconds to respond if you do not respond in the given time you will lose</strong></p>
        <div id="question">
            <h5>${question.question1}</h5>
            <p>A  ${question.option1}</p>
            <p>B  ${question.option2}</p>
            <p>C  ${question.option3}</p>
        </div>
        <p>On your cell phone screen, select the correct answer.</p>
      </div>
    `;
  } else {
    app.innerHTML = `<p>No data available for the selected artist.</p>`;
  }
} catch (error) {
    console.error("Error fetching questions:", error);
  }
}
socket.on("artist-Selected", (artist) => { 
  renderScreenQuestion1M({ selectedArtist: artist } ); 
});
getQuestion();
}