import React from "react";

function WeatherCard(props) {
  return (
    <div>
      {props.data !== null ? (
        <div className="weather-card">
          <h2>
            {props.data.name}
            <sup>{props.data.sys.country}</sup>
          </h2>
          <h1>{Math.round(props.data.main.temp)}°C</h1>
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@4x.png`}
            alt=""
          />
          <h4>{props.data.weather[0].description.toUpperCase()}</h4>
        </div>
      ) : (
        <div className="weather-card" style={{textAlign: 'center'}}>
          <h1>That place doesn't exist</h1>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
