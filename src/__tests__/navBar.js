import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../navBar.js";

test("Mount", () => {
  const container = document.createElement("div");
  ReactDOM.render(<NavBar />, container);
});
