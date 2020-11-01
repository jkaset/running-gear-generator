import { getWeather, useWeather }  from "./WeatherProvider.js"

const eventHub = document.querySelector("#container")

// eventHub.addEventListener("zipSubmitted", event => {
//   let zips = []
//   const zip = event.detail.zipEntered
//   console.log(zip)
//   getWeather(zip)
  
//   .then(() => 
//     zips = useWeather())
// })

export const dispatchWeather = () => {
  

  eventHub.addEventListener("zipSubmitted", e => {
    const zip = e.detail.zipEntered
    //console.log(zip)
    
    getWeather(zip)
    .then(() => {
      const contentTarget = document.querySelector(".renderGear")
      let weatherHTMLString = ""
      const weatherArray = useWeather()
      console.log(weatherArray)
      
      console.log(weatherHTMLString)
      contentTarget.innerHTML = `${weatherHTMLString}`
    })
  })
}
    