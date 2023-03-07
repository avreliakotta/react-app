import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';


export default function Weather(props){
const [weatherData, setWeatherData] = useState({ true: false });
    const [city, setCity] = useState(props.defaultCity); 
    
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
    function search() {
        let apiKey = "9ba75f9bf64d65ecbfcf60t3o5b4f10a";
            
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
    
}

    function handleSubmit(event) {
        event.preventDefault();
    
    search(city)
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }
        if (weatherData.ready) {
    
            return (
                <div className="Weather">
             <form  onSubmit={handleSubmit} className="Form-control">
                 <div className="row">
                    <div className="col-9">
                                <input type="search" className="form-control" placeholder="Enter city" autoFocus="on" onChange={handleCityChange} />
                    </div>
                     <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
                    </form >
                    <WeatherInfo data={weatherData} />
            
        </div >
    
    );
        } else {
            search();
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
