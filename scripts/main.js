import { TempFormComponent } from "./temperature/TempForm.js"
import { getWeather, useWeather } from "./weather/WeatherProvider.js"
import { ZipFormComponent } from "./weather/Weather.js"


import "./temperature/TempForm.js"
import "./temperature/TempList.js"
import {dispatchWeather} from "./weather/WeatherList.js"

TempFormComponent()
getWeather(37210)
useWeather()
ZipFormComponent()
dispatchWeather()
