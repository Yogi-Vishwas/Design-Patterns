import { DisplayElement, Observer, Subject } from "../interfaces";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature?: number;
  private humidity?: number;
  private pressure?: number;
  private weatherData: Subject;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(
      "Current Conditions: " +
        this.temperature +
        "C degrees, " +
        this.humidity +
        " humidity and " +
        this.pressure +
        " atm pressure"
    );
  }
}
