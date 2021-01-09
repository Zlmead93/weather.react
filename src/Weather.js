import React, {useState} from "react";
import axios from "axios";


export default function Weather() {
const [city, setCity] = useState("");
  
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
  
    console.log(response.data);
    setWeather({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "5dbe4b73ade41818331f8e929d9c90fe";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="Search"
        onChange={updateCity}
        placeholder="Enter a city..."
      />
      <input type="Submit" />
    </form>
  );

  if (loaded) {
    return (
      <div className="form">
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)} ℃</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {Math.round(weather.wind)} km/h </li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}