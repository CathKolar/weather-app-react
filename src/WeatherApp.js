import React from "react";
import "./WeatherApp.css";
import LastUpdate from "./LastUpdate";
import Search from "./Search";
import Today from "./Today";
import Forcast from "./Forcast";

import Conversion from "./Conversion";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="weather-app-wrapper">
        <div className="card">
          <div className="card-body">
            <div className="row header">
              <div className="col-6">
                <LastUpdate />
              </div>
              <div className="col-6">
                <Search />
              </div>
            </div>
            <Today />

            <Forcast />

            <Conversion />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
