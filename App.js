// const root = document.getElementById('root');

// const tagLine = document.createElement('h3');

// tagLine.innerText = 'Feed your Cravings';

// root.appendChild(tagLine);

// Using React
/* <div id="parent">
    <p id="tagline">Feed your Cravings</p>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("p", { id: "tagline" }, "Feed your Cravings"),
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);