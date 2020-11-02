import { getWeather, useWeather }  from "./WeatherProvider.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("zipSubmitted", event => {
  console.log("i hear")
  const zipEntered = event.detail.zipEntered
  console.log(zipEntered)
  getWeather(zipEntered)
  
  .then(() => {
    const zips = useWeather()
    console.log(zips)
    zips.main.feels-like
})
})


    
