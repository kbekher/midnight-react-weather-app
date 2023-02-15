import React from "react";
import Weather from "./Weather";
import "./App.css";

import background from "./img/Bg.jpg";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
      className="App"
    >
      <div className="container">
        <Weather defaultCity="Kyiv" />
      </div>
    </div>
  );
}
