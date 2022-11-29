import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello {year}</h1>
  </div>,
  document.getElementById("root")
);
