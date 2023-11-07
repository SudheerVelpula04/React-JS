import React, { useState, useEffect } from "react";
import "./App.css";
import WhetherImages from "./WhetherImages";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("hyderabad");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchWeatherData = () => {
    const apiKey = "23403b60d4fdfcfa9e6b496a33728769";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Search</button>

      {error && <div>Error: {error}</div>}

      {!weatherData ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}

      <WhetherImages city={city} setWeatherData={setWeatherData} setError={setError} />
    </div>
  );
}

export default WeatherApp;