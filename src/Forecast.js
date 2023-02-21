import React, { useState, useEffect } from "react";
import axios from "axios";
import WeekDay from "./WeekDay";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.longitude, props.latitude]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="wrap">
          {forecastData.map((dailyForecast, index) => {
            if (index > 0 && index < 7) {
              return (
                <div key={index}>
                  <WeekDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
