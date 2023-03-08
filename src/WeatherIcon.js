import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
   
    
    const codeMapping = {
        "clear-sky-day":"CLEAR_DAY",
            "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDY_DAY",
        "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-day": "CLOUDY", 
       "scattered-clouds-night":"PARTLY_CLOUDY_NIGHT",
        "rain-day": "RAIN",
    "broken-clouds-day":"CLOUDY",
        "snow-day": "SNOW",
        "mist-day": "FOG",
        "shower-rain-day": "RAIN",
        
         };

        return (
            <div className="WeatherIcon">
                <ReactAnimatedWeather
                    icon={codeMapping[props.code]}
                    color="#1e1e1e"
                    size={64}
                    animate={true}
                />
            </div>
        );
    }
