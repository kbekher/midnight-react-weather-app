import React from "react";
import FormattedDate from "./FormattedDate";
import PropertyBox from "./PropertyBox";

import "./TodayWeather.css";

export default function TodayWeather(props) {
  return (
    <div className="TodayWeather">
      <div className="main-info">
        <div className="text-section">
          <div>
            <h1 className="city">{props.data.city}</h1>
            <div className="current-date">
              <FormattedDate date={props.data.date} />
            </div>
          </div>
          <div className="temperature-section">
            <div className="temperature">
              {Math.round(props.data.temperature)}°
            </div>
            <div className="scale-switcher">
              <div className="celsius scale">
                <a href="/" className="scale-link">
                  C
                </a>
              </div>
              <div className="fahrenheit scale turned-off">
                <a href="/" className="scale-link">
                  F
                </a>
              </div>
            </div>
            <div className="description">{props.data.description}</div>
          </div>
        </div>
        <div className="image-section">
          <img src={props.data.icon} alt="weather icon"></img>
        </div>
      </div>
      <div className="properties">
        <PropertyBox
          name="Wind"
          value={props.data.wind}
          unit="m/h"
          img="/images/Wind.svg"
          alt="wind icon"
        />
        <PropertyBox
          name="Humidity"
          value={props.data.humidity}
          unit="%"
          img="/images/Humidity.svg"
          alt="humidity icon"
        />
        <PropertyBox
          name="Pressure"
          value={props.data.pressure}
          unit="hPa"
          img="/images/Pressure.svg"
          alt="pressure icon"
        />
      </div>
    </div>
  );
}
