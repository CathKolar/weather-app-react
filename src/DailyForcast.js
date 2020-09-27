import React from "react";
import "./DailyForcast.css";
export default function DailyForcast(props) {
  return (
    <div className="DailyForcast">
      <h5>{props.day}</h5>
      <div>
        <img className="weather-icon-future" src={props.image} alt=""></img>
      </div>
      <div className="temp-high-low-future">
        <strong>
          <span>{props.high}</span>º
        </strong>{" "}
        | <span>{props.low}</span>º
      </div>
    </div>
  );
}
