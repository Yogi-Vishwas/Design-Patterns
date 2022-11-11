import { Observer, Subject } from "./interfaces";

export class WeatherData implements Subject {
  private observers: Observer[];
  private temperature?: number;
  private humidity?: number;
  private pressure?: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    let index = this.observers.indexOf(o);
    if (index >= 0) {
      this.observers.splice(index);
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature!, this.humidity!, this.pressure!);
    });
  }

  measurmentChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurmentChanged();
  }
}
