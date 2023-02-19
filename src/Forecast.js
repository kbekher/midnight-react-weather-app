import React, { useState } from "react";
import axios from "axios";
import WeekDay from "./WeekDay";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="wrap">
          <WeekDay data={forecastData[0]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "e036b2a294859f51590o881405683ft3";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.latitude}&lon=${props.longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

// temperature={forecastData[0].temperature.day}
//             date={forecastData[0].time}
//             icon={forecastData[0].condition.icon}
