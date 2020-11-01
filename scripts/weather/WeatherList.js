import { getWeather, useWeather }  from "./WeatherProvider.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("zipSubmitted", event => {
  let zips = []
  const zip = event.detail.zipEntered
  console.log(zip)
  getWeather(zip)
  
  .then(() => 
    zips = useWeather())
  
  
})
