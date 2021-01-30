import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState ({ready:false});
  const [city, setCity] = useState (props.defaultCity);
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
  icon: response.data.weather[0].icon
});
  
   
  }
function handleSubmit (event){
  event.preventDefault();
  search (city);
}
function search(){
const apiKey = "5dbe4b73ade41818331f8e929d9c90fe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
function handleSearch (event){
setCity (event.target.value);
}
  if (weatherData.ready){
 return (
  <div className= "Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className = "col-9">
          <input
          type = "search"
          placeholder = "Enter a city"
          className="form-control"
          onChange= {handleSearch}
          />
        </div>
        <div className = "col-3">
          <input
          type= "submit"
          value= "Search"
          className = "btn btn-info"/>
        </div>
      </div>
    </form>
   <WeatherInfo data={weatherData}/>
   <WeatherForecast city={weatherData.city}/>
  
   </div>);
   } else {
  
search();
  return "Loading..."
  }
}