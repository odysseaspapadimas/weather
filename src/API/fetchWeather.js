import axios from "axios";

const API = {
  URL: "https://api.openweathermap.org/data/2.5/weather",
  KEY: "d4e3c763024b362f191a09174b66ebde",
};

export const fetchWeather = async (query) => {
  try {
    const { data } = await axios(
      //`${API.URL}?q=${query}&exclude=daily,minutely,alerts&units=metric&appid=${API.KEY}`
      `${API.URL}?q=${query}&exclude=daily,minutely,alerts&units=metric&appid=d4e3c763024b362f191a09174b66ebde`
    );

    return data;
  } catch (err) {
    return null;
  }
};
