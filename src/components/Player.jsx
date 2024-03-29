import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

const Player = function () {
  const song = useSelector((state) => {
    return state.song;
  });
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={(10, { offset: 2 })}>
          <Row className="h-100 justify-content-center align-items-center">
            <Col className="d-flex justify-content-start align-items-center text-white">
              <img src={song.artist.picture} alt="" width={"50px"} />
              <div className="d-flex flex-column ms-3">
                <span className="fw-bold">{song.artist.name}</span>
                <span>{song.title}</span>
              </div>
            </Col>
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#s">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#p">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#p">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#n">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#r">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
