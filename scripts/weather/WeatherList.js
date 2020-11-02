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
    const contentTarget = document.querySelector(".renderGear")
    if (zips.main.temp >= 65) {
      contentTarget.innerHTML = `<p>nooo</p>`
    } else if (zips.main.temp < 65) {
      contentTarget.innerHTML = `<p>yesss</p>`
    }
})
})


    
