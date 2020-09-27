import React from "react";
import DailyForcast from "./DailyForcast";
import "./Forcast.css";
export default function Forcast() {
  return (
    <div className="Forcast">
      <div className="container-fluid">
        <div className="card week-ahead">
          <div className="row weather-forcast"></div>
          <div className="col-2.5 day">
            <DailyForcast
              day="Wed"
              image={"http://openweathermap.org/img/wn/01d@2x.png"}
              high={30}
              low={27}
            />
          </div>
          <div className="col-2.5  day">
            <DailyForcast
              day="Thurs"
              image={"http://openweathermap.org/img/wn/01d@2x.png"}
              high={35}
              low={29}
            />
          </div>
          <div className="col-2.5 day">
            <DailyForcast
              day="Fri"
              image={"http://openweathermap.org/img/wn/01d@2x.png"}
              high={39}
              low={32}
            />
          </div>
          <div className="col-2.5  day">
            <DailyForcast
              day="Sat"
              image={"http://openweathermap.org/img/wn/01d@2x.png"}
              high={42}
              low={35}
            />
          </div>
          <div className="col-2.5  day">
            <DailyForcast
              day="Sun"
              image={"http://openweathermap.org/img/wn/01d@2x.png"}
              high={41}
              low={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
