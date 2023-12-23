import React from "react";
// import PropTypes from 'prop-types';

export default function TemperatureContent({ city, data }) {
  const getImage = (sunrise, sunset, temp) => {
    let time = "day";
    let mode = "high";
    let current = new Date();

    if (temp <= 18) {
      mode = "low";
    } else if (temp <= 28) {
      mode = "mid";
    } else {
      mode = "high";
    }
    if (
      sunrise <= current.getTime() / 1000 &&
      current.getTime() / 1000 <= sunset
    ) {
      time = "day";
    } else {
      time = "night";
    }

    return time + "_" + mode;
  };

  const image = getImage(data.sunrise, data.sunset, data.temp);

  return (
    <>
      <div className="temp_container">
      {typeof data.temp != "number" ? (
            <span className="city_name"> Invalid City </span>
          ) : (
            <span className="city_name">{city}</span>
          )}
        
        <div className="temp">
          {typeof data.temp != "number" ? (
            <span className="temp_numeric"> - </span>
          ) : (
            <span className="temp_numeric">{data.temp} &#176;</span>
          )}
        </div>
        <img src={require("../icons/" + image + ".png")} />
      </div>
    </>
  );
}
