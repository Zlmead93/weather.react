import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState ({ready:false});
  function handleResponse (response){
     console.log (response.data);
     
    setWeatherData({
      ready: true,
      date:new Date(response.data.dt*1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
    humidity: response.data.main.humidity,
  feels:response.data.main.feels_like,
  description: response.data.weather[0].description,
  iconUrl: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`
});
  
   
  }
  if (weatherData.ready){
 return (
  <div className= "Weather">
    <form>
      <div className="row">
        <div className = "col-9">
          <input 
          type = "search"
          placeholder = "Enter a city"
          className="form-control"/>
        </div>
        <div className = "col-3">
          <input
          type= "submit"
          value= "Search"
          className = "btn btn-info"/>
        </div>
      </div>
    </form>
    
   <h1>London</h1>
        <ul><li className="date">
         <FormattedDate date= {weatherData.date}/></li>
          <li className = "text-capitalize">{weatherData.description}</li></ul>
          <div className= "row mt-3">
            <div className = "col-6">
              <div className = "clearfix">
              <img src={weatherData.iconUrl} className= "float-left" alt={weatherData.description}/>
              <div className= "float-left">
                <span className="temp">{Math.round(weatherData.temp)}</span>
              °C
            </div>
            </div>
             </div>
            <div className="col-6">
             <ul><li>
                Feels like: {Math.round(weatherData.feels)} °C
                </li>
                <li>
                  Humidity: {Math.round(weatherData.humidity)}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} Km/h</li></ul>
            </div>
          </div>
          <a
          className="App-link"
          href="https://github.com/Zlmead93/weather.react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded by ZLM - Github
        </a>
      </div> );
  } else {
  const apiKey = "5dbe4b73ade41818331f8e929d9c90fe";
 
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
  }
}