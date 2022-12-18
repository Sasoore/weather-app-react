import React, { useState } from 'react'
import axios from 'axios'
import './weather.css'
import 'bootstrap/dist/css/bootstrap.css'

import Temperature from './Temperature'
import Current from './Current'
import Wind from './Wind'

export default function Search() {
  let [city, setCity] = useState(null)
  let [temperature, setTemp] = useState(null)
  let [description, setDes] = useState(null)
  let [wind, setWind] = useState(null)
  let [humidity, setHumid] = useState(null)

  function Show(respond) {
    setTemp(Math.round(respond.data.main.temp))
    setDes(respond.data.weather[0].description)
    setWind(respond.data.wind.speed)
    setHumid(respond.data.main.humidity)
  }

  function HandleSubmit(event) {
    event.preventDefault()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c5eae455c0d84c0de87118e8f84251f7&units=metric`
    axios.get(url).then(Show)
  }

  function updateCity(event) {
    setCity(event.target.value)
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=c5eae455c0d84c0de87118e8f84251f7`
  return (
    <div className="container">
      <ul>
        <li className="left-side text-center mt-2" id="city">
          {city}
        </li>
        <li id="temp" className="text-center">
          {temperature}
        </li>
        <li id="situation" className="text-center">
          {description}
        </li>
        <li className="text-center humidity mt-5">Humidity: {humidity}</li>
        <li className="text-center wind"> Wind: {wind}</li>
      </ul>
      <form onSubmit={HandleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          id="search-input"
          onChange={updateCity}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary"
          id="searchBtn"
        />
      </form>
      <p>
        <a href="https://github.com/Sasoore/weather-app-react" target="_blank">
          Open-source code
        </a>{' '}
        by Sara
      </p>
    </div>
  )
}
