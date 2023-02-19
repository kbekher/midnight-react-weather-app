import React from "react";
import WeekDay from "./WeekDay";
import "./Forecast.css";

export default function Forecast() {
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
