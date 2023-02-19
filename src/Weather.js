import React, { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import TodayWeather from "./TodayWeather";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  const loaderStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: `/images/${response.data.condition.icon}.png`,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
    });
  }

  function search(city) {
    const apiKey = "e036b2a294859f51590o881405683ft3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    setCity("");
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-wrap">
          <div className="search-box">
            <form
              autoComplete="off"
              className="align-items-center"
              onSubmit={handleSubmit}
            >
              <img
                src="/images/akar-icons_search.svg"
                alt="search-icon"
                className="search-icon"
              />
              <input
                type="text"
                className="search-input"
                value={city}
                placeholder="Change the city..."
                autoFocus="off"
                onChange={updateCity}
              />
            </form>
          </div>
          <TodayWeather data={weatherData} />
        </div>
        <Forecast />
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
    search("Kyiv");
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
