import { Beverage, CondimentDecorator } from "../interfaces";

export class Whip implements CondimentDecorator {
  beverage: Beverage;
  description: string;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
    this.description = "Whip";
  }

  getDescription(): string {
    return this.beverage.getDescription() + " + " + this.description;
  }

  cost(): number {
    return 0.1 + this.beverage.cost();
  }
}
