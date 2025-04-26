const artists = [
    {
      name: "Sabrina Carpenter",
      img: "https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Fsabrina.png?alt=media&token=ee278d39-d3ab-4459-b65a-a94cc54e2651"
    },
    {
      name: "Shakira",
      img: "https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Fshaki.png?alt=media&token=464205bc-b6a2-43df-a82a-f52cda56f084"
    },
    {
      name: "Lady Gaga",
      img: "https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Flady.png?alt=media&token=5fa20f34-84ab-465a-9d5c-3c5c4f68f501"
    },
    {
      name: "Artic Monkeys",
      img: "https://firebasestorage.googleapis.com/v0/b/algoritmosdatos2024-02.appspot.com/o/imagesPosts%2Fartics.png?alt=media&token=80d291db-fafb-4c07-a421-6574efa95bf9"
    }
  ];

const getAllArtists = async () => {
  return artists;
};

module.exports = {
  getAllArtists,
};