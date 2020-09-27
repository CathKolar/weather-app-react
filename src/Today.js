import React from "react";
import "./Today.css";
export default function () {
  let weatherData = {
    place: "Seville, ES",
    description: "Clear sky",
    imageUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    high: 41,
    low: 33,
    temperature: 35,
    humidity: 18,
    wind: 10
  };
  return (
    <div className="Today">
      <div className="row current-conditions">
        <div className="col-4">
          <img src={weatherData.imageUrl} alt=" " />
          <h1>
            <div className="condition-description">
              {weatherData.description}
            </div>
            <span className="temp-high-low-today">
              <strong>{weatherData.high}</strong>º| {weatherData.low}º
            </span>
          </h1>
        </div>
        <div className="col-4">
          <h2>
            <span>{weatherData.temperature}ºC</span>
            <span></span>
            <div>{weatherData.place}</div>
          </h2>
        </div>
        <div className="col-4 weather-extras">
          <p>
            Humidity: {weatherData.humidity}%
            <br />
            Wind: {weatherData.wind} km/h
          </p>
        </div>
      </div>
    </div>
  );
}
