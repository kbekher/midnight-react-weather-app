import React, { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import TodayWeather from "./TodayWeather";
import "./Weather.css";

export default function Weather(props) {
  // const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  // function updateCity(event) {
  //   event.preventDefault();
  //   setCity(event.target.value);
  // }

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
        <div className="weather-wrap">
          <div className="search-box">
            <form
              autoComplete="off"
              className="align-items-center"
              // onSubmit={handleSubmit}
            >
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
                // onChange={updateCity}
              />
            </form>
          </div>
          <TodayWeather data={weatherData} />
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
