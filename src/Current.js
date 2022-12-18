import React from 'react'
import './weather.css'

export default function Current() {
  return (
    <div className="left-side text-center">
      <h1 id="city">Paris</h1>
      <ul>
        <li id="date">Last updated: Tuesday 10:00</li>
        <li id="description">Cloudy</li>
      </ul>
    </div>
  )
}
