import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon"

export default function WeatherInfo (props){
  return (
  <div className = "WeatherInfo"> <h1>{props.data.city}</h1>
        <ul><li className="date">
         <FormattedDate date= {props.data.date}/></li>
          <li className = "text-capitalize">{props.data.description}</li></ul>
          <div className= "row mt-3">
            <div className = "col-6">
              <div className = "clearfix">
                <WeatherIcon code={props.data.icon}/>
              <img src={props.data.iconUrl} className= "float-left" alt={props.data.description}/>
              <div className= "float-left">
                <WeatherTemperature celsius={props.data.temp}/>
              
            </div>
            </div>
             </div>
            <div className="col-6">
             <ul><li>
                Feels like: {Math.round(props.data.feels)} °C
                </li>
                <li>
                  Humidity: {Math.round(props.data.humidity)}%</li>
                  <li>Wind: {Math.round(props.data.wind)} Km/h</li></ul>
            </div>
            
          </div>

         

         
      </div>);  
      
}