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

//make html card for render weather
// const weatherCard = (weather) => {
//   return `
    
//       <p>${weather.name}</p>
    
//   `
// }

// export const weatherList = () => {
  
//   getWeather().then( 
//     () => {
//       const weatherContainer = document.querySelector(".renderGear")
//       const weatherArray = useWeather() 
//       let buildWeatherList = ""
//       for (const weather of weatherArray) {
//         buildWeatherList += weatherCard(weather)
//     }
//   weatherContainer.innerHTML += `${buildWeatherList}`
// })
// }
