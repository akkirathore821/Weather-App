import React from "react";

export default function InfoContainer({ data }) {
  console.log(typeof data.temp);
  return (
    <>
      <div className="info_container">
        <span className="weather_info_heading">Weather Info</span>

        <table>
          <tr>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/max_temp.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Max Temp</span>
                  <span className="info_value">
                    {typeof data.max_temp != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{data.max_temp} &#8451;</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/min_temp.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Min Temp</span>
                  <span className="info_value">
                    {typeof data.min_temp != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{data.min_temp} &#8451;</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/cloud_pct.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Cloud pct</span>
                  <span className="info_value">
                    
                    {typeof data.cloud_pct != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{data.cloud_pct} %</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/wind.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Wind Speed</span>
                  <span className="info_value">
                    {typeof data.wind_speed != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{data.wind_speed} km/h</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/wind.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Wind Degree</span>
                  <span className="info_value">
                    {typeof data.wind_degrees != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{data.wind_degrees} &#176;</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/humidity.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Humidity</span>
                  <span className="info_value">
                    {typeof data.humidity != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{data.humidity} %</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/sunrise.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Sunrise</span>
                  <span className="info_value">
                      {typeof data.sunrise != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{new Date(data.sunrise * 1000).toLocaleTimeString()}</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/sunset.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Sunset</span>
                  <span className="info_value">
                    {typeof data.sunset != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{new Date(data.sunset * 1000).toLocaleTimeString()}</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
            <td>
              <div className="weather_info_container">
                <span className="weather_info_container_image">
                  <img src={require("../icons/feels_like.png")} />
                </span>
                <span className="weather_info_container_data">
                  <span className="info_heading">Feels Like</span>
                  <span className="info_value">
                    {typeof data.feels_like != "number" ? (
                      <span> - </span>
                    ) : (
                      <span>{data.feels_like} &#8451;</span>
                    )}
                  </span>
                </span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
