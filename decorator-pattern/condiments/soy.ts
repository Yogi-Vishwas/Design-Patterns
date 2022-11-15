import { Beverage, CondimentDecorator } from "../interfaces";

export class Soy implements CondimentDecorator {
  beverage: Beverage;
  description: string;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
    this.description = "Soy";
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + " + this.description;
  }

  cost(): number {
    return 0.15 + this.beverage.cost();
  }
}
