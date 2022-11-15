import { Beverage } from "../interfaces";

export class DarkRoast implements Beverage {
  description: string;

  constructor() {
    this.description = "Dark Roast";
  }

  getDescription(): string {
    return this.description;
  }

  cost(): number {
    return 0.99;
  }
}
