import React from "react";
import "./PropertyBox.css";

export default function PropertyBox(props) {
  return (
    <div className="PropertyBox">
      <div className="text-section">
        <span className="property-name"> {props.name}</span>
        <div className="property-value">
          {props.value} {props.unit}
        </div>
      </div>
      <div className="image-section">
        <img src={props.img} alt={props.alt} />
      </div>
    </div>
  );
}
