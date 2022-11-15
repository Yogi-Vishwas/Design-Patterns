import { Beverage } from "../interfaces";

export class Espresso implements Beverage {
  description: string;

  constructor() {
    this.description = "Espresso";
  }

  getDescription(): string {
    return this.description;
  }

  cost(): number {
    return 1.99;
  }
}
