import React, {useState} from "react";
import "./WeatherForecast.css"
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

export default function WeatherForecast (props){
const [loaded, setLoaded] = useState(false);
const [forecast,setForecast] = useState (null);

    function handleForecastResponse (response) {
        setForecast(response.data);
        setLoaded(true);
    }
    if (loaded ) {
        return(
           
        <div className = "WeatherForecast row">
         <WeatherForecastPreview data={forecast.list[0]} />
               <WeatherForecastPreview data={forecast.list[1]} />
                  <WeatherForecastPreview data={forecast.list[2]} />
                   <WeatherForecastPreview data={forecast.list[3]} />
                    <WeatherForecastPreview data={forecast.list[4]} />
        </div> 
        );
       
    } else {
         
    let apiKey = "5dbe4b73ade41818331f8e929d9c90fe"
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
axios.get(url).then(handleForecastResponse);
    return props.city; }
}