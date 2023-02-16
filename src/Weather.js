import React, { useState } from "react";
import axios from "axios";

import PropertyBox from "./PropertyBox";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Sunday 12:00",
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon: `/images/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
    });
  }

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
                <p className="current-date">{weatherData.date}</p>
              </div>
              <div className="temperature-section">
                <div className="temperature">{weatherData.temperature}°</div>
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
    axios.get(apiUrl).then(displayWeather);
    return "Loading...";
  }
}
