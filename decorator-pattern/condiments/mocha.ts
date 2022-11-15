import { Beverage, CondimentDecorator } from "../interfaces";

export class Mocha implements CondimentDecorator {
  beverage: Beverage;
  description: string;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
    this.description = "Mocha";
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + " + this.description;
  }

  cost(): number {
    return 0.2 + this.beverage.cost();
  }
}
