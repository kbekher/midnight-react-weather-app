import React from "react";
import axios from "axios";
import WeekDay from "./WeekDay";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {}

  const apiKey = "e036b2a294859f51590o881405683ft3";
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.latitude}&lon=${props.longitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="wrap">
        <WeekDay />
        <WeekDay />
        <WeekDay />
        <WeekDay />
        <WeekDay />
        <WeekDay />
      </div>
    </div>
  );
}
