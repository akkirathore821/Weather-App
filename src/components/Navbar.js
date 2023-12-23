import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <a href="#">
            <img src={require("../icons/weather_app.png")} />
          </a>
        </div>

        <div className="navbar_item_container">
          <ul>
            <li>
              <a href="#">
                <div className="item_div_container">
                  <img src={require("../icons/weather_icon.png")} />
                </div>
                <span className="navbar_item">Weather</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
