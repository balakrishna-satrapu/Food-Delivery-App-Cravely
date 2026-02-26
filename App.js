// const root = document.getElementById('root');

// const tagLine = document.createElement('h3');

// tagLine.innerText = 'Feed your Cravings';

// root.appendChild(tagLine);

// Using React
/* <div id="parent">
    <p id="tagline">Feed your Cravings</p>
</div> */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = <div id="parent"><h1 id="tagline">Feed your Cravings</h1></div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);