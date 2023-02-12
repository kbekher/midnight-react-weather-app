import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="today-weather">
        <div className="search-box">
          <form autocomplete="off" className="align-items-center">
            <img src="" alt="search-icon" className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Change the city..."
              autofocus="off"
            />
          </form>
        </div>
        <div className="main-info">
          <div className="text-section">
            <div>
              <h1 className="city">Kyiv</h1>
              <p className="current-date">Sunday 13:47</p>
            </div>
            <div className="temperature-section">
              <div className="temperature">2°</div>
              <div className="scale-switcher">
                <div className="celsius scale">
                  <a href="/" className="scale-link">
                    C
                  </a>
                </div>
                <div className="fahrenheit scale turned-off">
                  <a href="/" className="scale-link">
                    F
                  </a>
                </div>
              </div>
              <div className="description">Overcast clouds</div>
            </div>
          </div>
          <div className="image-section">
            <img src="/" alt="clear sky"></img>
          </div>
        </div>
        <div className="properties">
          <div className="property">
            <div className="text-section">
              <span className="name">Wind</span>
              <div className="value">
                5.61 <span className="unit">m/h</span>
              </div>
            </div>
            <div className="image-section">
              <img src="/" alt="wind-icon" />
            </div>
          </div>
          <div className="property">
            <div className="text-section">
              <span className="name">Humidity</span>
              <div className="value">
                66 <span className="unit">%</span>
              </div>
            </div>
            <div className="image-section">
              <img src="/" alt="humidity-icon" />
            </div>
          </div>
          <div className="property">
            <div className="text-section">
              <span className="name">Pressure</span>
              <div className="value">
                1029 <span className="unit">hPa</span>
              </div>
            </div>
            <div className="image-section">
              <img src="/" alt="pressure-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="forecast"></div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://leafy-basbousa-36ee27.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Kristina Bekher
        </a>{" "}
        and is
        <a
          href="https://github.com/NinjaGexly/midnight-react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}
