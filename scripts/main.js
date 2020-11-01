import { TempFormComponent } from "./temperature/TempForm.js"
TempFormComponent()
import { getWeather } from "./weather/WeatherProvider.js"
import { ZipFormComponent } from "./weather/Weather.js"
import "./weather/WeatherList.js"

import "./temperature/TempForm.js"
import "./temperature/TempList.js"

getWeather(37207)

ZipFormComponent()