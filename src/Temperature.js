import React from 'react'
import './weather.css'

export default function Temperature() {
  return (
    <div className="text-center">
      <h1 id="temp">8</h1>
      <span id="celcius" className="conversion">
        °C|°F
      </span>
    </div>
  )
}
