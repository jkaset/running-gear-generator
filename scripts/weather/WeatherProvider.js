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

export const useWeather = () => weather

//json-server -p 8088 -w notes.json

//new... creating weather render card
// export const weatherRenderCard = (weatherObj) => {
//   return `
    
//       <p>${weatherObj.main.feels_like}</p>
    
//   `
// }