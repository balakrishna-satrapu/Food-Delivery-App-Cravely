import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { LOGO_URL } from "./utlis/constants";
import Body from "./components/Body";

const App = () => {
  return (
    <div id="app-container">
      <Header logo={LOGO_URL} />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
