import { getWeather, useWeather }  from "./WeatherProvider.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("zipSubmitted", event => {
  
  getWeather().then( 
    () => {
      const weatherContainer = document.querySelector(".renderGear")
      const weatherArray = useWeather() 
      let buildWeatherList = ""
      for (const weatherObj of weatherArray) {
        buildWeatherList += weatherRenderCard(weatherObj)
    }
  weatherContainer.innerHTML += `${buildWeatherList}`
})
  
})


//event listener started with group
// eventHub.addEventListener("zipSubmitted", event => {
// let zips = []
//   const zip = event.detail.zipEntered
//   console.log(zip)
//   getWeather(zip)
  
//   .then(() => 
//     zips = useWeather())

//   })