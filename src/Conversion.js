import React from "react";
import "./Conversion.css";
export default function Conversion() {
  return (
    <div className="Conversion">
      <div className="scale">
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-info button-celcius active"
          >
            ºC
          </button>
          <button
            type="button"
            className="btn btn-outline-info button-fahrenheit diabled"
          >
            ºF
          </button>
        </div>
      </div>
    </div>
  );
}
