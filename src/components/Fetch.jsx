import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Fetch = function (props) {
  const [songs, setSongs] = useState(null);
  const fetchSongs = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + props.artist)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((fetchedSongs) => {
        setSongs(fetchedSongs.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <>
      {songs && (
        <>
          {songs.slice(0, 4).map((song) => {
            return (
              <Col key={song.id}>
                <div className="d-flex flex-column align-items-center mt-2">
                  <img
                    onClick={() => {
                      console.log(song.id);
                    }}
                    src={song.artist.picture}
                    className="mb-2"
                    alt=""
                  />
                  <h5>{song.artist.name}</h5>
                  <p className="fw-normal">{song.title}</p>
                </div>
              </Col>
            );
          })}
        </>
      )}
    </>
  );
};

export default Fetch;
