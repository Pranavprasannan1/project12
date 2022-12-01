import React from "react";
import ReactDOM from "react-dom";
import App from "/App";

const date = new Date();
const year = date.getFullYear();

ReactDOM.render(<App/>,
  document.getElementById("root")
);
