import React from "react";
import { render } from "react-dom";

const App = () => {
  return <h1>Testing my frontend!</h1>;
};

const root = document.getElementById("root");

render(<App />, root);
