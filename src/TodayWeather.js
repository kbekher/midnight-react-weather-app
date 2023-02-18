import React from "react";
import FormattedDate from "./FormattedDate";
import TemperatureSection from "./TemperatureSection";
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
          <TemperatureSection
            celsius={props.data.temperature}
            description={props.data.description}
          />
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
