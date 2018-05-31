import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "Calibri, sans-serif"
};

const App = () => (
  <div style={styles}>
    <h3>Receitas da vix</h3>
    <hr />
    <blockquote>Brigadeiro Br hueuhe</blockquote>
    <ul>
      <li>achocolatado</li>
      <li>margarina</li>
      <li>leite condensado</li>
      <blockquote />
    </ul>
  </div>
);

render(<App />, document.getElementById("root"));
