import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url("/images/Bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
      className="App"
    >
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}
