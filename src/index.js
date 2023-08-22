import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
}

function Temprature() {
  let [temp, setTemp] = useState(72);

  return (<div className="widget" id="widget">
    <div className="loader" id="loader"></div>
    <label className="toggle" id="toggle">
      <input id="temp-toggle" type="checkbox" defaultChecked="checked" disabled />
      <i>
        <p>°C</p>
        <p>°F</p>
      </i>
    </label>
    <div className="temp" id="temp">{temp}°</div>
    <div className="city" id="city">Karachi, Pakistan</div>

    <div className="temp-controls">
      <a href="javascript:void(0);" className="pulse-animation-button" onClick={() => setTemp(++temp)}>+</a>
      <a href="javascript:void(0);" className="pulse-animation-button" onClick={() => setTemp(--temp)}>-</a>
    </div>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Temprature />
);