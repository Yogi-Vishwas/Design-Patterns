import { CurrentConditionsDisplay, ForecastDisplay } from "./observers";
import { WeatherData } from "./weatherData";

let weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);

//Setting different data all the subscribers should automatically be updated with new values
weatherData.setMeasurements(10, 35, 30.4);
weatherData.setMeasurements(0, 45, 29.2);
weatherData.setMeasurements(40, 78, 30.4);
