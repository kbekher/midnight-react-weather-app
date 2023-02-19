import React from "react";

import "./WeekDay.css";

export default function WeekDay() {
  return (
    <div className="WeekDay">
      <div>
        <span className="day">Monday</span> <span className="date">20/02</span>
        <div className="temperature">6° C</div>
      </div>
      <div>
        <img src="images/f-mist-day.png" alt="weather-icon" />
      </div>
    </div>
  );
}
