import React from "react";
import "./Weather.css";

export default function Weather () {
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
            </form>
            <h1>Kyiv</h1>
            <ul className="list">
                <li>Friday 17:02</li>
                <li>Mostly Cloudy</li>
            </ul>
            < div className="row mt-3">
                <div className="col-6">
                
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left" />
                    
                        <span className="temperature">6</span><span className="unit">°C</span>
                    
                    </div>
            
                <div className="col-6">
                    <ul className="list">
                        <li>Humidity: 80%</li>
                        <li>Wind: 4km/h</li>
                    </ul>
                    </div>
                </div>
            </div>
    
    );
}