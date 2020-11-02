import { TempFormComponent } from "./temperature/TempForm.js"
import { getWeather, useWeather } from "./weather/WeatherProvider.js"
import { ZipFormComponent } from "./weather/Weather.js"


import "./temperature/TempForm.js"
import "./temperature/TempList.js"
import "./weather/WeatherList.js"

TempFormComponent()
//console.log(getWeather(37207))
getWeather(37206)
useWeather()
ZipFormComponent()

