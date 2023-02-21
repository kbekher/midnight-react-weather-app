import React from "react";

import "./WeekDay.css";

export default function WeekDay(props) {
  let temperature = Math.round(props.data.temperature.day);
  let icon = `images/f-${props.data.condition.icon}.png`;

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDate();
    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let month = months[date.getMonth()];
    return `${day}/${month}`;
  }

  return (
    <div className="WeekDay">
      <div>
        <span className="day">{formatDay(props.data.time)}</span>{" "}
        <span className="date">{formatDate(props.data.time)}</span>
        <div className="temperature">{temperature}° C</div>
      </div>
      <div>
        <img src={icon} alt="weather-icon" />
      </div>
    </div>
  );
}
