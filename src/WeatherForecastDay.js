import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature} °`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum); 
        return `${temperature} °`;
    }
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        return days[day];
    }
    

    return (
        <div className="WeatherForecast-day">
            {day()}
            <WeatherIcon code={props.data.condition.icon} size={32} />
            <div className="WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    );
}