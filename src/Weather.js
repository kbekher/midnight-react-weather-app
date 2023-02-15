import React from "react";
import PropertyBox from "./PropertyBox";

import "./Weather.css";
import searchIcon from "./img/akar-icons_search.svg";
import weatherIcon from "./img/03d.png";
import windIcon from "./img/Wind.svg";
import humidityIcon from "./img/Humidity.svg";
import pressureIcon from "./img/Pressure.svg";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="today-weather">
        <div className="search-box">
          <form autocomplete="off" className="align-items-center">
            <img src={searchIcon} alt="search-icon" className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Change the city..."
              autofocus="off"
            />
          </form>
        </div>
        <div className="main-info">
          <div className="text-section">
            <div>
              <h1 className="city">Kyiv</h1>
              <p className="current-date">Sunday 13:47</p>
            </div>
            <div className="temperature-section">
              <div className="temperature">2°</div>
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
              <div className="description">overcast clouds</div>
            </div>
          </div>
          <div className="image-section">
            <img src={weatherIcon} alt="clear sky"></img>
          </div>
        </div>
        <div className="properties">
          <PropertyBox
            name="Wind"
            value={5.61}
            unit="m/h"
            img={windIcon}
            alt="wind icon"
          />
          <PropertyBox
            name="Humidity"
            value={66}
            unit="%"
            img={humidityIcon}
            alt="humidity icon"
          />
          <PropertyBox
            name="Pressure"
            value={1029}
            unit="hPa"
            img={pressureIcon}
            alt="pressure icon"
          />
        </div>
      </div>
      <div className="forecast"></div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://leafy-basbousa-36ee27.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Kristina Bekher
        </a>{" "}
        and is
        <a
          href="https://github.com/NinjaGexly/midnight-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}
