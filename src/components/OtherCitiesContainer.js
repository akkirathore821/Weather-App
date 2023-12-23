import React from "react";

export default function OtherCitiesContainer({ otherCities, changeCity }) {
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

  const image1 = getImage(
    otherCities[0].sunrise,
    otherCities[0].sunset,
    otherCities[0].temp
  );
  const image2 = getImage(
    otherCities[1].sunrise,
    otherCities[1].sunset,
    otherCities[1].temp
  );
  const image3 = getImage(
    otherCities[2].sunrise,
    otherCities[2].sunset,
    otherCities[2].temp
  );
  const image4 = getImage(
    otherCities[3].sunrise,
    otherCities[3].sunset,
    otherCities[3].temp
  );

  return (
    <>
      <div className="other_cities_container">
        <table>
          <tr>
            <td id="Bangalore" onClick={changeCity}>
              <div className="city_container">
                <div className="city_container_city_name">Bangalore</div>
                <div>
                  <img src={require("../icons/" + image1 + ".png")} />
                </div>
                <div className="city_container_city_temp">
                  <span>{otherCities[0].temp}</span>
                  <span> &#176;</span>
                </div>
              </div>
            </td>
            <td id="Kolkata" onClick={changeCity}>
              <div className="city_container">
                <div className="city_container_city_name">Kolkata</div>
                <div>
                  <img src={require("../icons/" + image2 + ".png")} />
                </div>
                <div className="city_container_city_temp">
                  <span>{otherCities[1].temp}</span>
                  <span> &#176;</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="Mumbai" onClick={changeCity}>
              <div className="city_container">
                <div className="city_container_city_name">Mumbai</div>
                <div>
                  <img src={require("../icons/" + image3 + ".png")} />
                </div>
                <div className="city_container_city_temp">
                  <span>{otherCities[2].temp}</span>
                  <span> &#176;</span>
                </div>
              </div>
            </td>
            <td id="Chennai" onClick={changeCity}>
              <div className="city_container">
                <div className="city_container_city_name">Chennai</div>
                <div>
                  <img src={require("../icons/" + image4 + ".png")} />
                </div>
                <div className="city_container_city_temp">
                  <span>{otherCities[3].temp}</span>
                  <span> &#176;</span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
