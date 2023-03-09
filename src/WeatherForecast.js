import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    function handleResponse(response) {

    }

    let apiKey = "9ba75f9bf64d65ecbfcf60t3o5b4f10a";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Fri</div>
                    <WeatherIcon code="clear-sky-day" size={32} />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">19</span>
                        <span className="WeatherForecast-temperature-min">10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}