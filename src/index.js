import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./navBar.js";
import Merchants from "./merchants.js";
import Contact from "./contact.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Merchants />
      <Contact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
