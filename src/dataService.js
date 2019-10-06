import axios from "axios";

const {
  REACT_APP_WEATHER_API_BASE_URL,
  REACT_APP_WEATHER_API_KEY
} = process.env;

export function fetchWeather(data) {
  let queryString = data.city
    ? `q=${data.city}`
    : `lat=${data.lat}&lon=${data.lon}`;
  return axios
    .get(
      `${REACT_APP_WEATHER_API_BASE_URL}?appid=${REACT_APP_WEATHER_API_KEY}&${queryString}`
    )
    .then(res => res)
    .catch(err => {
      throw err;
    });
}
