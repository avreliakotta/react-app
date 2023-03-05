import React,{useState} from "react";
import "./Weather.css";
 import axios from 'axios';

export default function Weather() {
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
        
            data:"Fiday 19:30"
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
                <li>{weatherData.data}</li>
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
            let city = "London";
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
            return "Loading..."
        }
    }
