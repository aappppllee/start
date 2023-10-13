import React from "react";
import ReactDOM from "react-dom";

const url = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      {" "}
      My Favourite Foods
    </h1>
    <ul>
      <img className="imgsize" src="https://picsum.photos/200" />
      <br />
      <img className="imgsize" src="https://picsum.photos/200" />
      <br />
      <img className="imgsize" src="https://picsum.photos/200" />

      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
