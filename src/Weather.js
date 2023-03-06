import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ true: false });

    function handleResponse(response) {
    
        setWeatherData({
            ready:true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            city: response.data.city,
            description: response.data.condition.description,
            icon_url: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
            humidity: response.data.temperature.humidity,
        
            date:new Date(response.data.time*1000)
        });
    }
        if (weatherData.ready) {
    
            return (
                <div className="Weather">
             <form className="Form-control">
                 <div className="row">
                    <div className="col-9">
                        <input type="search" className="form-control" placeholder="Enter city" autoFocus="on" />
                    </div>
                     <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form >
            <h1>{weatherData.city}</h1>
            <ul className="list text-capitalize">
                        <li><FormattedDate date={weatherData.date} /></li>
                <li>{weatherData.description}</li>
            </ul>
            < div className="row mt-3">
                <div className="col-6">
                
                    <img src={weatherData.icon_url} alt={weatherData.icon} className="float-left" />
                    
                    <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
                    
                </div>
            
                <div className="col-6">
                    <ul className="list">
                        <li>Humidity: {weatherData.humidity} %</li>
                        <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    </ul>
                </div>
            </div>
        </div >
    
    );
        } else {
            let apiKey = "9ba75f9bf64d65ecbfcf60t3o5b4f10a";
            
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
            return <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
        }
    }
