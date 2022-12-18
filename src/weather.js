import React from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

export default function Weather() {
  function handleSubmit(response) {}
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=c5eae455c0d84c0de87118e8f84251f7`
  axios.get(apiUrl).then(handleSubmit)
}
