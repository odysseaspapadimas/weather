import axios from "axios";

const API = {
  URL: "https://api.openweathermap.org/data/2.5/weather",
  KEY: process.env.REACT_APP_API_KEY,
};

export const fetchWeather = async (query) => {
  try {
    const { data } = await axios(
      //`${API.URL}?q=${query}&exclude=daily,minutely,alerts&units=metric&appid=${API.KEY}`
      `${API.URL}?q=${query}&exclude=daily,minutely,alerts&units=metric&appid=${API.KEY}`
    );

    return data;
  } catch (err) {
    return null;
  }
};
