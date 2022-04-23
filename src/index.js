//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const myName = "Zakaria";
let year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Created By {myName}</h1>
    <p>&copy;{myName + " " + year}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
