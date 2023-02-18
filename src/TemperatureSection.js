import React, { useState } from "react";

import "./TemperatureSection.css";

export default function TemperatureSection(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureSection">
        <div className="temperature">{Math.round(props.celsius)}°</div>
        <div className="scale-switcher">
          <div className="celsius scale">
            <a href="/" className="scale-link" onClick={showCelsius}>
              C
            </a>
          </div>
          <div className="fahrenheit scale turned-off">
            <a href="/" className="scale-link" onClick={showFahrenheit}>
              F
            </a>
          </div>
        </div>
        <div className="description">{props.description}</div>
      </div>
    );
  } else {
    return (
      <div className="TemperatureSection">
        <div className="temperature">{Math.round(fahrenheit())}°</div>
        <div className="scale-switcher">
          <div className="celsius scale turned-off">
            <a href="/" className="scale-link" onClick={showCelsius}>
              C
            </a>
          </div>
          <div className="fahrenheit scale ">
            <a href="/" className="scale-link" onClick={showFahrenheit}>
              F
            </a>
          </div>
        </div>
        <div className="description">{props.description}</div>
      </div>
    );
  }
}
