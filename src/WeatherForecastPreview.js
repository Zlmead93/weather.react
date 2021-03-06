import React from "react";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview (props) {
    function hours () {
        let date = new Date(props.data.dt*1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }
    function temp() {
        let temp = Math.round(props.data.main.temp);
   return `${temp}°C`; 
}
return (
    <div className = "WeatherForecastPreview col">
    {hours()}
        <WeatherIcon code={props.data.weather[0].icon}/>
        {temp()}
        </div> );
         }