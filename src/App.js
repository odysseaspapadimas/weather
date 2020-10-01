import React, { useState } from "react";
import { fetchWeather } from "./API/fetchWeather";
import "./App.css";
import WeatherCard from "./WeatherCard";

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState();

  const search = async (e) => {
    if(e.key === 'Enter') {
      const weatherData = await fetchWeather(query);
      setData(weatherData);
    }
  }

  return (
    <div className="app">
      <input 
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {data === undefined ? '' : <WeatherCard data={data} />}
    </div>
  );
}

export default App;
