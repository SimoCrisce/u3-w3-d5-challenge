import "./App.css";
import Main from "./components/Main";
import Player from "./components/Player";
import VerticalSidebar from "./components/VerticalSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./assets/style.css";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <VerticalSidebar />
          <Main />
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
