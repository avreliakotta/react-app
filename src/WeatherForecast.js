import React,{useState,useEffect} from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
    
    
    function handleResponse(response) {
        console.log(response.data.daily);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    console.log(props);
    if (loaded) {
        
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5)
                            return (
                                <div className="col">
                                    
                                    <WeatherForecastDay data={forecast[index]} />
                                </div>
                            );
                    })}
                
                </div>
            </div>
        );
   

        } else {
    let apiKey = "9ba75f9bf64d65ecbfcf60t3o5b4f10a";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
        return null;
     }
}