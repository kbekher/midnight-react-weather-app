import React, { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

import FormattedDate from "./FormattedDate";
import PropertyBox from "./PropertyBox";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: `/images/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
    });
  }

  const loaderStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="today-weather">
          <div className="search-box">
            <form autoComplete="off" className="align-items-center">
              <img
                src="/images/akar-icons_search.svg"
                alt="search-icon"
                className="search-icon"
              />
              <input
                type="text"
                className="search-input"
                placeholder="Change the city..."
                autoFocus="off"
              />
            </form>
          </div>
          <div className="main-info">
            <div className="text-section">
              <div>
                <h1 className="city">{weatherData.city}</h1>
                <div className="current-date">
                  <FormattedDate date={weatherData.date} />
                </div>
              </div>
              <div className="temperature-section">
                <div className="temperature">
                  {Math.round(weatherData.temperature)}°
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
                <div className="description">{weatherData.description}</div>
              </div>
            </div>
            <div className="image-section">
              <img src={weatherData.icon} alt="weather icon"></img>
            </div>
          </div>
          <div className="properties">
            <PropertyBox
              name="Wind"
              value={weatherData.wind}
              unit="m/h"
              img="/images/Wind.svg"
              alt="wind icon"
            />
            <PropertyBox
              name="Humidity"
              value={weatherData.humidity}
              unit="%"
              img="/images/Humidity.svg"
              alt="humidity icon"
            />
            <PropertyBox
              name="Pressure"
              value={weatherData.pressure}
              unit="hPa"
              img="/images/Pressure.svg"
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
  } else {
    const apiKey = "e036b2a294859f51590o881405683ft3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div style={loaderStyle}>
        <BeatLoader
          color="#ffffff"
          loading={true}
          size={15}
          speedMultiplier={1}
          margin={2}
        />
      </div>
    );
  }
}
