import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header";
import './App.css';
import DisplayCounter from "./Components/DisplayCounter";

import Container from "./Components/Container";
import ControlDisplay from "./Components/ControlDisplay";

function App() {
  return (
    <center>
      <Container>

        <Header></Header>
        <div className="px-4 py-5 my-5 text-center">
          <div className="col-lg-6 mx-auto">
           <DisplayCounter></DisplayCounter> 
           <ControlDisplay></ControlDisplay>
          </div>
        </div>
      </Container>

    </center>
  );
}

export default App;
