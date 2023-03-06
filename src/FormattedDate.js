import React from "react";
export default function FormattedDate(props) {
    console.log(props.date);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = [props.date.getHours()];
    let minutes = [props.date.getMinutes()];
    return (
    <div className="FormattedDate">
    
            {day} {hours} : {minutes}
            </div>
    );
}