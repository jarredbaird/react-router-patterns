import React from "react";
import dogs from "./dogs";
import NavBar from "./NavBar";
import Routes from "./Routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = { dogs };

export default App;
