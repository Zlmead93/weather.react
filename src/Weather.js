import React from "react";
import "./Weather.css";

export default function Weather() {
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
          Saturday 16:23</li>
          <li className = "description">Mostly Cloudy</li></ul>
          <div className= "row">
            <div className = "col-6">
              <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"/>
              6°
            </div>
            <div className="col-6">
              <ul><li>
                Precipitation: 11%
                </li>
                <li>
                  Humidity: 2%</li>
                  <li>Wind: 10 mph</li></ul>
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
      </div> ); }