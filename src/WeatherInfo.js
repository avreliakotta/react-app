import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul className="list text-capitalize">
                        <li><FormattedDate date={props.data.date} /></li>
                <li>{props.data.description}</li>
            </ul>
            < div className="row mt-3">
                <div className="col-6">
                
                    <img src={props.data.icon_url} alt={props.data.icon} className="float-left" />
                    
                    <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
                    
                </div>
            
                <div className="col-6">
                    <ul className="list">
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}