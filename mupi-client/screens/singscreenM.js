import { socket } from "../app.js";

export default function renderScreenNoSingM(selectedArtist) {
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
        const question = artistData.questions[2];  

      app.innerHTML = `
            <div id="sing">
                  <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M83.963 5.76289e-07C94.9943 -3.23299e-06 105.917 2.17392 116.108 6.39752C126.299 10.6211 135.557 16.8116 143.354 24.6151C151.151 32.4186 157.334 41.6822 161.549 51.8764C165.764 62.0706 167.929 72.9956 167.92 84.0268C167.92 130.409 130.297 168.027 83.9415 168C72.8915 167.999 61.9504 165.816 51.7459 161.577C41.5413 157.338 32.2739 151.126 24.4753 143.297C16.6768 135.469 10.5004 126.178 6.30043 115.957C2.10048 105.736 -0.040396 94.787 0.000577182 83.737C0.0703491 37.4782 37.6774 -0.00536649 83.963 5.76289e-07ZM71.7905 44.4447C58.2279 44.4179 44.8424 45.7543 31.8005 49.6454C27.2653 50.9979 25.0272 55.1949 26.2885 59.4779C27.5497 63.7608 31.7844 65.9452 36.3195 64.6517C42.4118 62.8744 48.6581 61.6758 54.9755 61.0719C82.4334 58.5869 109.054 60.9914 133.791 74.4896C134.684 75.0051 135.671 75.3369 136.695 75.4655C137.718 75.5941 138.757 75.5169 139.75 75.2384C140.743 74.9599 141.67 74.4857 142.477 73.8438C143.284 73.2018 143.955 72.405 144.45 71.5001C146.564 67.7056 145.309 63.165 141.439 60.825C138.298 58.9345 135.03 57.2615 131.66 55.8175C112.548 47.622 92.4483 44.5681 71.7905 44.4447ZM133.641 94.8952C133.641 92.2921 132.632 90.4137 129.884 88.8733C100.295 72.3427 69.107 69.4177 36.5825 78.0104C35.6256 78.2522 34.7381 78.7134 33.9902 79.3575C32.8463 80.3078 32.0625 81.6215 31.7695 83.0795C31.4766 84.5376 31.692 86.0521 32.3801 87.3705C33.9151 90.3117 36.9797 91.5085 40.6508 90.4619C58.4855 85.3793 76.4437 85.2988 94.4825 89.1309C104.68 91.2778 114.384 94.8146 123.384 100.187C128.15 103.042 133.603 100.171 133.641 94.9059V94.8952ZM69.4504 100.799C60.5196 100.659 50.3759 102.168 40.3019 104.298C38.198 104.744 36.3625 105.549 35.5145 107.706C35.1313 108.572 35.0034 109.529 35.1461 110.464C35.2887 111.4 35.6959 112.276 36.3195 112.988C37.9297 114.936 40.0174 115.134 42.4004 114.598C58.4265 111.045 74.5277 109.767 90.7577 113.224C99.1672 114.978 107.23 118.108 114.62 122.487C118.377 124.72 122.198 123.298 123.105 119.466C123.674 117.061 122.515 114.984 119.547 113.24C104.514 104.422 88.1762 100.665 69.4504 100.788V100.799Z" fill="#1ED760"/>
                  </svg>
                  <h1>Challenge 3</h1>
            <div id="contador">
                  <p>Your time for this 19 seconds to respond if you do not respond in the given time you will lose</p>
            </div>
            <div id="arctic-sing">
                  <h4>${question.question3}</h4>
            </div>          
                  <p>You’ll see the first line of the lyrics on the screen. Your challenge is to sing the missing part out loud!</p>
                  <p>Press the button on your phone to start!</p>
            </div>
        `;
      } else {app.innerHTML = `<p>No data available for the selected artist.</p>`;}
      } catch (error) {console.error("Error fetching questions:", error);}
      }
      socket.on("artist-Selected", (artist) => { renderScreenQuestion2M({ selectedArtist: artist } ); });
      getQuestion();
}
