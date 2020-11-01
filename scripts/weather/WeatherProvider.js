import keys from "../../Settings.js"

let weather = []

//renders form to the dom
export const getWeather = (zipcode) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${keys.weatherKey}`)
  .then(response => response.json())
  .then(parsedResponse => {
    console.log(parsedResponse)
    weather = parsedResponse
  })
}

//json-server -p 8088 -w notes.json