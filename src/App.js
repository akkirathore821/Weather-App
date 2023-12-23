import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import InfoContainer from "./components/InfoContainer";
import Navbar from "./components/Navbar";
import OtherCitiesContainer from "./components/OtherCitiesContainer";
import SearchBar from "./components/SearchBar";
import TemperatureContent from "./components/TemperatureContent";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b598f85bc1msh0085317f8da0d4ep112420jsne2d462e54ec9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function App() {
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState("");
  const [otherCities, setOtherCities] = useState([0, 0, 0, 0]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const changeCity = (event) => {
    const city = event.currentTarget.id;
    setCity(city);
    if (city === "Bangalore") setData(otherCities[0]);
    else if (city === "Kolkata") setData(otherCities[1]);
    else if (city === "Mumbai") setData(otherCities[2]);
    else if (city === "Chennai") setData(otherCities[3]);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
          inputValue,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response);
          setCity(inputValue);
          console.log(response);
        })
        .catch((error) => {
          console.error("This is the error : " + error);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let otherData = [0, 0, 0, 0];
      try {
        // Start fetching data
        const response = await fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
          options
        );
        const response1 = await fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
          options
        );
        const response2 = await fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
          options
        );
        const response3 = await fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
          options
        );
        const response4 = await fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai",
          options
        );

        if (
          !response1.ok ||
          !response1.ok ||
          !response2.ok ||
          !response3.ok ||
          !response4.ok
        ) {
          console.log("Failed to fetch data");
        }

        // Parse the response JSON
        otherData[0] = await response1.json();
        otherData[1] = await response2.json();
        otherData[2] = await response3.json();
        otherData[3] = await response4.json();

        // Update the state with the fetched data
        setData(await response.json());
        setOtherCities(otherData);
      } catch (error) {
        // Handle errors
        console.log("fetch" + " " + error);
      } finally {
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <SearchBar
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleEnterKeyPress={handleEnterKeyPress}
        />
        <TemperatureContent city={city} data={data} />
        <InfoContainer data={data} />
        <OtherCitiesContainer
          otherCities={otherCities}
          changeCity={changeCity}
        />
      </div>
    </>
  );
}

export default App;