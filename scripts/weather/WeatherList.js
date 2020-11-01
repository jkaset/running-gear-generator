import { getWeather, useWeather }  from "./WeatherProvider.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("zipSubmitted", event => {
  console.log("i hear")
  const zipEntered = event.detail.zipEntered.value
  //console.log(zipEntered)
  getWeather(zipEntered)
  
//   .then(() => 
//     zips = useWeather())
})


    
