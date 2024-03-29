import { useState, useEffect } from "react";

const SelectedSong = function () {
  const [song, setSong] = useState(null);
  fetchSong = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((fetchedSong) => {
        setSong(fetchedSong);
      })
      .catch();
  };
};

export default SelectedSong;
