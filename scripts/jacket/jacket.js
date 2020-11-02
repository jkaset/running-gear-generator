import { getWeather } from "../weather/WeatherProvider.js"
const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".renderGear")

eventHub.addEventListener("zipSubmitted", event => {
    // console.log("I hear the zip was submitted!");
    const zipToUse = event.detail.zipEntered
    getWeather(zipToUse)
      .then(returnedWeather => {
          const weatherForUse = returnedWeather
          jacketRender(weatherForUse)
      })
          // console.log("Here's the weather you asked for:", weather)
        })

const jacketRender = weatherObj => {
        if (weatherObj.main.feels_like >= 65) {
            contentTarget.innerHTML = `<h3>Leave your jacket at home today.</h3>`
        } else {
            contentTarget.innerHTML = `<h3>You will need a jacket today.</h3>`
        }
    
}