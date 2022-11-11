import { DisplayElement, Observer, Subject } from "../interfaces";

export class ForecastDisplay implements Observer, DisplayElement {
  private coldRange: number;
  private hotRange: number;
  private weatherData: Subject;
  private temperature?: number;
  private humidity?: number;

  constructor(weatherData: Subject) {
    this.coldRange = 5; // Upper temperature for the cold weather, cold range would be any temp below 5 degree Celsius
    this.hotRange = 35; // Lower temperature for the hot weather

    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;

    this.display();
  }

  displayTemp() {
    if (this.temperature! < this.coldRange) {
      console.log("Get ready to freeze, where are your warmers!!");
    } else if (this.temperature! > this.hotRange) {
      console.log(
        `Now work wouldn't be the only thing boiling your blood, raising temperatures ahead`
      );
    } else {
      console.log(
        `Weather will be pleasant and romantic, not that it will matter to you loner.`
      );
    }
  }

  displayHumid() {
    if (this.humidity! < 40) {
      console.log(`Dry day ahead, fetch your creams.`);
    } else if (this.humidity! > 55) {
      console.log(`Kitna bhi try kar lo bunny, kapde ni sukhne wale..`);
    } else {
      console.log("Regular day with regular humidity and your regular job.");
    }
  }

  display(): void {
    console.log("Tempeature Update: ");
    this.displayTemp();
    console.log("Humidity Update: ");
    this.displayHumid();
  }
}
